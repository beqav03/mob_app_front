import React, { useState, useMemo } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    ChevronLeft,
    Star,
    MapPin,
    Clock,
    Users,
    Calendar,
    Info,
    ChevronRight,
    Heart,
} from 'lucide-react-native';
import { RootStackParamList } from '../../../navigation/types';
import { mockRestaurants } from '../../../services/dataService';
import { COLORS } from '../../../constants/colors';
import styles from './Restaurant.styles';

type RestaurantRouteProp = RouteProp<RootStackParamList, 'Restaurant'>;

const Restaurant = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RestaurantRouteProp>();
    const { restaurantId } = route.params;

    const restaurant = useMemo(
        () =>
            mockRestaurants.find((r) => r.id === restaurantId) ||
            mockRestaurants[0],
        [restaurantId],
    );

    const [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split('T')[0],
    );
    const [selectedTime, setSelectedTime] = useState('19:30');
    const [guests, setGuests] = useState(2);
    const [isFavorite, setIsFavorite] = useState(false);

    // Generate next 7 days
    const dates = useMemo(() => {
        return Array.from({ length: 7 }).map((_, i) => {
            const d = new Date();
            d.setDate(d.getDate() + i);
            return {
                full: d.toISOString().split('T')[0],
                day: d.toLocaleDateString('en-US', { weekday: 'short' }),
                date: d.getDate(),
            };
        });
    }, []);

    const timeSlots = [
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
    ];

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Hero Header */}
                <View style={styles.heroContainer}>
                    <Image source={restaurant.image} style={styles.heroImage} />
                    <View style={styles.heroOverlay} />

                    <SafeAreaView style={styles.headerNav}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.navButton}
                        >
                            <ChevronLeft size={24} color={COLORS.white} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setIsFavorite(!isFavorite)}
                            style={styles.navButton}
                        >
                            <Heart
                                size={24}
                                color={isFavorite ? '#FF3B30' : COLORS.white}
                                fill={isFavorite ? '#FF3B30' : 'transparent'}
                            />
                        </TouchableOpacity>
                    </SafeAreaView>

                    <View style={styles.restaurantBasicInfo}>
                        <View style={styles.cuisineBadge}>
                            <Text style={styles.cuisineText}>
                                {restaurant.cuisine}
                            </Text>
                        </View>
                        <Text style={styles.restaurantName}>
                            {restaurant.name}
                        </Text>
                        <View style={styles.ratingLocationRow}>
                            <View style={styles.ratingBox}>
                                <Star
                                    size={14}
                                    color="#FFCC00"
                                    fill="#FFCC00"
                                />
                                <Text style={styles.ratingText}>
                                    {restaurant.rating}
                                </Text>
                                <Text style={styles.reviewsText}>
                                    ({restaurant.reviewsCount} reviews)
                                </Text>
                            </View>
                            <View style={styles.locationBox}>
                                <MapPin size={14} color={COLORS.white} />
                                <Text
                                    style={styles.locationText}
                                    numberOfLines={1}
                                >
                                    {restaurant.address}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Reservation Logic: The "First Logic" of the page */}
                <View style={styles.reservationSection}>
                    <View style={styles.sectionHeader}>
                        <Calendar size={20} color={COLORS.primary} />
                        <Text style={styles.sectionTitle}>Select Date</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.dateList}
                    >
                        {dates.map((d) => (
                            <TouchableOpacity
                                key={d.full}
                                style={[
                                    styles.dateCard,
                                    selectedDate === d.full &&
                                        styles.activeDateCard,
                                ]}
                                onPress={() => setSelectedDate(d.full)}
                            >
                                <Text
                                    style={[
                                        styles.dateDay,
                                        selectedDate === d.full &&
                                            styles.activeDateText,
                                    ]}
                                >
                                    {d.day}
                                </Text>
                                <Text
                                    style={[
                                        styles.dateNum,
                                        selectedDate === d.full &&
                                            styles.activeDateText,
                                    ]}
                                >
                                    {d.date}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View style={styles.sectionHeader}>
                        <Clock size={20} color={COLORS.primary} />
                        <Text style={styles.sectionTitle}>Select Time</Text>
                    </View>
                    <View style={styles.timeGrid}>
                        {timeSlots.map((time) => (
                            <TouchableOpacity
                                key={time}
                                style={[
                                    styles.timeSlot,
                                    selectedTime === time &&
                                        styles.activeTimeSlot,
                                ]}
                                onPress={() => setSelectedTime(time)}
                            >
                                <Text
                                    style={[
                                        styles.timeText,
                                        selectedTime === time &&
                                            styles.activeTimeText,
                                    ]}
                                >
                                    {time}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.sectionHeader}>
                        <Users size={20} color={COLORS.primary} />
                        <Text style={styles.sectionTitle}>
                            Number of Guests
                        </Text>
                    </View>
                    <View style={styles.guestSelector}>
                        <TouchableOpacity
                            style={styles.guestBtn}
                            onPress={() => setGuests(Math.max(1, guests - 1))}
                        >
                            <Text style={styles.guestBtnText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.guestCount}>{guests}</Text>
                        <TouchableOpacity
                            style={styles.guestBtn}
                            onPress={() => setGuests(Math.min(12, guests + 1))}
                        >
                            <Text style={styles.guestBtnText}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.guestLabel}>
                            {guests === 1 ? 'Person' : 'People'}
                        </Text>
                    </View>
                </View>

                {/* Info Section */}
                <View style={styles.infoSection}>
                    <Text style={styles.aboutTitle}>About</Text>
                    <Text style={styles.aboutText}>
                        {restaurant.description}
                    </Text>

                    <TouchableOpacity style={styles.infoRow}>
                        <View style={styles.infoLeft}>
                            <Info size={20} color={COLORS.gray} />
                            <Text style={styles.infoLabel}>
                                Restaurant Policy & Info
                            </Text>
                        </View>
                        <ChevronRight size={20} color={COLORS.gray} />
                    </TouchableOpacity>
                </View>

                {/* Pre-order Preview (Secondary Logic) */}
                <View style={styles.preOrderSection}>
                    <View style={styles.sectionHeaderRow}>
                        <Text style={styles.preOrderTitle}>
                            Want to pre-order?
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('MenuSelection', {
                                    restaurantId,
                                    tableId: 'any',
                                })
                            }
                        >
                            <Text style={styles.seeMenuText}>See Menu</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.preOrderSubtitle}>
                        Save time by choosing your meals in advance.
                    </Text>
                </View>
            </ScrollView>

            {/* Floating Action Button */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.mainActionButton}
                    onPress={() =>
                        navigation.navigate('TableSelection', { restaurantId })
                    }
                >
                    <View style={styles.btnContent}>
                        <Text style={styles.btnMainText}>
                            Select Your Table
                        </Text>
                        <Text style={styles.btnSubText}>
                            {selectedDate} at {selectedTime}
                        </Text>
                    </View>
                    <ChevronRight size={24} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Restaurant;
