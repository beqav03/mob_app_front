import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    ScrollView,
    Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './Booking.styles';
import { COLORS } from '@/src/constants/colors';

const TIME_SLOTS = [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
];

export const Booking = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { restaurantId } = route.params || {};

    const [guests, setGuests] = useState(2);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Simple YYYY-MM-DD
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleNext = () => {
        if (!selectedTime) {
            Alert.alert(
                'Required',
                'Please select a time for your reservation.',
            );
            return;
        }

        navigation.navigate('TableSelection', {
            restaurantId,
            guests,
            date,
            time: selectedTime,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Reservation Details</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Number of Guests</Text>
                <View style={styles.guestContainer}>
                    <TouchableOpacity
                        style={styles.guestButton}
                        onPress={() => setGuests(Math.max(1, guests - 1))}
                    >
                        <Text style={styles.guestButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.guestCount}>{guests}</Text>
                    <TouchableOpacity
                        style={styles.guestButton}
                        onPress={() => setGuests(Math.min(10, guests + 1))}
                    >
                        <Text style={styles.guestButtonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.sectionTitle}>Select Date</Text>
                <TextInput
                    style={styles.input}
                    value={date}
                    onChangeText={setDate}
                    placeholder="YYYY-MM-DD"
                />

                <Text style={styles.sectionTitle}>Select Time</Text>
                <View style={styles.timeGrid}>
                    {TIME_SLOTS.map((time) => (
                        <TouchableOpacity
                            key={time}
                            style={[
                                styles.timeSlot,
                                selectedTime === time &&
                                    styles.selectedTimeSlot,
                            ]}
                            onPress={() => setSelectedTime(time)}
                        >
                            <Text
                                style={[
                                    styles.timeText,
                                    selectedTime === time &&
                                        styles.selectedTimeText,
                                ]}
                            >
                                {time}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Find a Table</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
