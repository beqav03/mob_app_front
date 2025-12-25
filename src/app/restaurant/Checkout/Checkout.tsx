// beqav03/mobapp/src/app/restaurant/Checkout/Checkout.tsx

import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './Checkout.styles';
import { formatPrice } from '@/src/utils/helpers';
import { COLORS } from '@/src/constants/colors';

export const Checkout = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { date, time, guests, items = [], total = 0 } = route.params || {};

    const [loading, setLoading] = useState(false);

    const handlePayment = () => {
        setLoading(true);
        // Simulate payment API
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('Success');
        }, 2000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Review Order</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Booking Details</Text>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Date & Time</Text>
                        <Text style={styles.value}>
                            {date} at {time}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Guests</Text>
                        <Text style={styles.value}>{guests} People</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Order Summary</Text>
                <View style={styles.card}>
                    {items.map((item: any, index: number) => (
                        <View key={index} style={styles.orderItem}>
                            <Text style={styles.label}>
                                {item.quantity}x {item.name}
                            </Text>
                            <Text style={styles.value}>
                                {formatPrice(item.price * item.quantity)}
                            </Text>
                        </View>
                    ))}
                    {items.length === 0 && (
                        <Text style={styles.label}>
                            No food items pre-ordered
                        </Text>
                    )}

                    <View style={styles.divider} />

                    <View style={styles.totalRow}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.totalPrice}>
                            {formatPrice(total)}
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Payment Method</Text>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.paymentMethod}>
                        <Text style={styles.paymentIcon}>💳</Text>
                        <Text style={styles.value}>**** **** **** 4242</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handlePayment}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color={COLORS.white} />
                    ) : (
                        <Text style={styles.buttonText}>Confirm & Pay</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
