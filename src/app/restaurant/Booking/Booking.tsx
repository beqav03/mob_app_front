import React, { useMemo } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    ChevronLeft,
    Calendar,
    Clock,
    Users,
    MapPin,
    CheckCircle,
} from 'lucide-react-native';
import { MainStackParamList } from '../../../navigation/types';
import { mockRestaurants } from '../../../services/dataService';
import { COLORS } from '../../../constants/colors';
import styles from './Booking.styles';

type BookingRouteProp = RouteProp<MainStackParamList, 'Booking'>;

const Booking = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const route = useRoute<BookingRouteProp>();
    const { restaurantId, tableId } = route.params;

    const restaurant = useMemo(
        () =>
            mockRestaurants.find((r) => r.id === restaurantId) ||
            mockRestaurants[0],
        [restaurantId],
    );

    const table = useMemo(
        () => restaurant.tables.find((t) => t.id === tableId),
        [restaurant.tables, tableId],
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <ChevronLeft size={28} color={COLORS.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Review Booking</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.summaryCard}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <View style={styles.locationRow}>
                        <MapPin size={14} color={COLORS.gray} />
                        <Text style={styles.locationText}>
                            {restaurant.address}
                        </Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.detailsGrid}>
                        <View style={styles.detailItem}>
                            <Calendar size={18} color={COLORS.primary} />
                            <View>
                                <Text style={styles.detailLabel}>Date</Text>
                                <Text style={styles.detailValue}>
                                    May 25, 2024
                                </Text>
                            </View>
                        </View>
                        <View style={styles.detailItem}>
                            <Clock size={18} color={COLORS.primary} />
                            <View>
                                <Text style={styles.detailLabel}>Time</Text>
                                <Text style={styles.detailValue}>19:30 PM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailsGrid}>
                        <View style={styles.detailItem}>
                            <Users size={18} color={COLORS.primary} />
                            <View>
                                <Text style={styles.detailLabel}>Guests</Text>
                                <Text style={styles.detailValue}>4 People</Text>
                            </View>
                        </View>
                        <View style={styles.detailItem}>
                            <CheckCircle size={18} color={COLORS.primary} />
                            <View>
                                <Text style={styles.detailLabel}>Table</Text>
                                <Text style={styles.detailValue}>
                                    T-{table?.number || 'Any'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Cancellation Policy</Text>
                    <View style={styles.policyCard}>
                        <Text style={styles.policyText}>
                            Cancel for free up to 24 hours before your
                            reservation. Cancellations within 24 hours may incur
                            a $10 fee.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.payButton}
                    onPress={() =>
                        navigation.navigate('Checkout', {
                            bookingId: 'temp_id',
                        })
                    }
                >
                    <Text style={styles.payButtonText}>Confirm & Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Booking;
