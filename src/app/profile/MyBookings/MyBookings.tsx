import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    Calendar,
    Clock,
    Users,
    ChevronRight,
    MapPin,
} from 'lucide-react-native';
import { RootStackParamList } from '../../../navigation/types';
import { mockBookings, mockRestaurants } from '../../../services/dataService';
import { Booking, Restaurant } from '../../../types';
import { COLORS } from '../../../constants/colors';
import styles from './MyBookings.styles';

const MyBookings = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming');

    // Filter bookings based on status and date
    const filteredBookings = mockBookings.filter((booking) => {
        if (activeTab === 'Upcoming') {
            return (
                booking.status === 'confirmed' || booking.status === 'pending'
            );
        }
        return booking.status === 'completed' || booking.status === 'cancelled';
    });

    const getRestaurantData = (
        restaurantId: string,
    ): Restaurant | undefined => {
        return mockRestaurants.find((r) => r.id === restaurantId);
    };

    const renderBookingItem = ({ item }: { item: Booking }) => {
        const restaurant = getRestaurantData(item.restaurantId);
        if (!restaurant) return null;

        const statusColor =
            item.status === 'confirmed'
                ? '#4CD964'
                : item.status === 'pending'
                ? '#FFCC00'
                : item.status === 'completed'
                ? COLORS.gray
                : '#FF3B30';

        return (
            <TouchableOpacity
                style={styles.bookingCard}
                onPress={() =>
                    navigation.navigate('Checkout', {
                        restaurantId: item.restaurantId,
                        bookingDetails: item,
                    })
                }
            >
                <View style={styles.cardHeader}>
                    <Image
                        source={restaurant.image}
                        style={styles.restaurantThumb}
                    />
                    <View style={styles.headerInfo}>
                        <Text style={styles.restaurantName}>
                            {restaurant.name}
                        </Text>
                        <View style={styles.statusBadge}>
                            <View
                                style={[
                                    styles.statusDot,
                                    { backgroundColor: statusColor },
                                ]}
                            />
                            <Text
                                style={[
                                    styles.statusText,
                                    { color: statusColor },
                                ]}
                            >
                                {item.status.charAt(0).toUpperCase() +
                                    item.status.slice(1)}
                            </Text>
                        </View>
                    </View>
                    <ChevronRight size={20} color={COLORS.gray} />
                </View>

                <View style={styles.cardDivider} />

                <View style={styles.detailsGrid}>
                    <View style={styles.detailItem}>
                        <Calendar size={16} color={COLORS.primary} />
                        <Text style={styles.detailText}>{item.date}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Clock size={16} color={COLORS.primary} />
                        <Text style={styles.detailText}>{item.time}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Users size={16} color={COLORS.primary} />
                        <Text style={styles.detailText}>
                            {item.guestsCount} People
                        </Text>
                    </View>
                </View>

                {item.preOrderItems && item.preOrderItems.length > 0 && (
                    <View style={styles.preOrderBadge}>
                        <Text style={styles.preOrderText}>
                            Pre-order included
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <Text style={styles.title}>My Bookings</Text>
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Upcoming' && styles.activeTab,
                    ]}
                    onPress={() => setActiveTab('Upcoming')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'Upcoming' && styles.activeTabText,
                        ]}
                    >
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Past' && styles.activeTab,
                    ]}
                    onPress={() => setActiveTab('Past')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'Past' && styles.activeTabText,
                        ]}
                    >
                        Past
                    </Text>
                </TouchableOpacity>
            </View>

            {filteredBookings.length > 0 ? (
                <FlatList
                    data={filteredBookings}
                    keyExtractor={(item) => item.id}
                    renderItem={renderBookingItem}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Calendar
                        size={64}
                        color={COLORS.lightGray}
                        strokeWidth={1}
                    />
                    <Text style={styles.emptyTitle}>
                        No {activeTab.toLowerCase()} bookings
                    </Text>
                    <Text style={styles.emptySubtitle}>
                        When you book a table, it will appear here.
                    </Text>
                    <TouchableOpacity
                        style={styles.exploreButton}
                        onPress={() =>
                            navigation.navigate('MainTabs', { screen: 'Home' })
                        }
                    >
                        <Text style={styles.exploreButtonText}>
                            Book a Table
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

export default MyBookings;
