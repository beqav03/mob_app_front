import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChevronLeft, CreditCard, ShieldCheck } from 'lucide-react-native';
import React, { useState } from 'react';
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../constants/colors';
import { RootStackParamList } from '../../../navigation/types';
import styles from './Checkout.styles';

const Checkout = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [selectedMethod, setSelectedMethod] = useState('visa');

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
                <Text style={styles.headerTitle}>Checkout</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.priceSummary}>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>
                            Reservation Deposit
                        </Text>
                        <Text style={styles.priceValue}>$10.00</Text>
                    </View>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Service Fee</Text>
                        <Text style={styles.priceValue}>$2.00</Text>
                    </View>
                    <View style={[styles.priceRow, styles.totalRow]}>
                        <Text style={styles.totalLabel}>Total to Pay</Text>
                        <Text style={styles.totalValue}>$12.00</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Payment Method</Text>

                <TouchableOpacity
                    style={[
                        styles.methodCard,
                        selectedMethod === 'visa' && styles.selectedMethod,
                    ]}
                    onPress={() => setSelectedMethod('visa')}
                >
                    <View style={styles.methodLeft}>
                        <CreditCard
                            size={24}
                            color={
                                selectedMethod === 'visa'
                                    ? COLORS.primary
                                    : COLORS.gray
                            }
                        />
                        <Text style={styles.methodText}>Visa •••• 4242</Text>
                    </View>
                    <View
                        style={[
                            styles.radio,
                            selectedMethod === 'visa' && styles.radioActive,
                        ]}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.methodCard,
                        selectedMethod === 'apple' && styles.selectedMethod,
                    ]}
                    onPress={() => setSelectedMethod('apple')}
                >
                    <View style={styles.methodLeft}>
                        <View style={styles.appleIcon}>
                            <Text style={styles.appleText}>Pay</Text>
                        </View>
                        <Text style={styles.methodText}>Apple Pay</Text>
                    </View>
                    <View
                        style={[
                            styles.radio,
                            selectedMethod === 'apple' && styles.radioActive,
                        ]}
                    />
                </TouchableOpacity>

                <View style={styles.secureNote}>
                    <ShieldCheck size={16} color={COLORS.gray} />
                    <Text style={styles.secureText}>
                        Your transaction is encrypted and secure.
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.payButton}
                    onPress={() =>
                        navigation.navigate('Success', {
                            bookingId: 'temp_booking_123',
                        })
                    }
                >
                    <Text style={styles.payButtonText}>Pay $12.00</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Checkout;
