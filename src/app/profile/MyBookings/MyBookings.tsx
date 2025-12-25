import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './MyBookings.styles';
import { COLORS } from '@/src/constants/colors';

const BOOKINGS = [
    {
        id: '1',
        restaurant: 'Burger King',
        date: '24 Dec 2025',
        time: '19:00',
        guests: 2,
        status: 'Confirmed',
        table: 4,
    },
    {
        id: '2',
        restaurant: 'Pizza Hut',
        date: '10 Dec 2025',
        time: '13:30',
        guests: 4,
        status: 'Completed',
        table: 1,
    },
];

export const MyBookings = () => {
    const navigation = useNavigation();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Confirmed':
                return COLORS.success;
            case 'Completed':
                return COLORS.gray;
            case 'Cancelled':
                return COLORS.error;
            default:
                return COLORS.primary;
        }
    };

    const renderItem = ({ item }: any) => (
        <View style={styles.bookingCard}>
            <View style={styles.row}>
                <Text style={styles.restaurantName}>{item.restaurant}</Text>
                <View
                    style={[
                        styles.statusBadge,
                        { backgroundColor: getStatusColor(item.status) },
                    ]}
                >
                    <Text style={styles.statusText}>{item.status}</Text>
                </View>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailText}>
                    📅 {item.date} at {item.time}
                </Text>
                <Text style={styles.detailText}>👥 {item.guests} Guests</Text>
                <Text style={styles.detailText}>🪑 Table #{item.table}</Text>
            </View>

            {item.status === 'Confirmed' && (
                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Cancel Reservation</Text>
                </TouchableOpacity>
            )}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Bookings</Text>
            </View>

            <FlatList
                data={BOOKINGS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};
