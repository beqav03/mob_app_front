import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    ChevronLeft,
    Plus,
    CreditCard,
    Trash2,
    CheckCircle2,
    Circle,
} from 'lucide-react-native';
import { COLORS } from '../../../constants/colors';
import styles from './PaymentMethods.styles';

const PaymentMethods = () => {
    const navigation = useNavigation();
    const [defaultId, setDefaultId] = useState('1');

    const cards = [
        {
            id: '1',
            type: 'Visa',
            last4: '4242',
            expiry: '12/26',
            holder: 'Jessica Thompson',
            brandColor: '#1A1F71', // Visa Blue
        },
        {
            id: '2',
            type: 'Mastercard',
            last4: '8888',
            expiry: '05/25',
            holder: 'Jessica Thompson',
            brandColor: '#EB001B', // Mastercard Red
        },
    ];

    const renderCard = (card: any) => {
        const isDefault = defaultId === card.id;

        return (
            <View key={card.id} style={styles.cardContainer}>
                <TouchableOpacity
                    style={[
                        styles.paymentCard,
                        { backgroundColor: card.brandColor },
                    ]}
                    activeOpacity={0.9}
                >
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardType}>{card.type}</Text>
                        <CreditCard color={COLORS.white} size={24} />
                    </View>

                    <Text style={styles.cardNumber}>
                        **** **** **** {card.last4}
                    </Text>

                    <View style={styles.cardFooter}>
                        <View>
                            <Text style={styles.cardLabel}>Card Holder</Text>
                            <Text style={styles.cardValue}>{card.holder}</Text>
                        </View>
                        <View>
                            <Text style={styles.cardLabel}>Expires</Text>
                            <Text style={styles.cardValue}>{card.expiry}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.cardActions}>
                    <TouchableOpacity
                        style={styles.defaultToggle}
                        onPress={() => setDefaultId(card.id)}
                    >
                        {isDefault ? (
                            <CheckCircle2 size={20} color={COLORS.primary} />
                        ) : (
                            <Circle size={20} color={COLORS.gray} />
                        )}
                        <Text
                            style={[
                                styles.actionText,
                                isDefault && styles.activeActionText,
                            ]}
                        >
                            {isDefault ? 'Default Method' : 'Set as Default'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.deleteButton}>
                        <Trash2 size={18} color="#FF3B30" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Custom Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <ChevronLeft size={28} color={COLORS.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payment Methods</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.sectionTitle}>Saved Cards</Text>
                {cards.map(renderCard)}

                <TouchableOpacity style={styles.addCardButton}>
                    <Plus size={20} color={COLORS.primary} />
                    <Text style={styles.addCardText}>
                        Add New Payment Method
                    </Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Digital Wallets</Text>
                <View style={styles.walletContainer}>
                    <TouchableOpacity style={styles.walletItem}>
                        <View style={styles.walletLeft}>
                            <View
                                style={[
                                    styles.walletIcon,
                                    { backgroundColor: '#000' },
                                ]}
                            >
                                <Text style={styles.appleText}>Pay</Text>
                            </View>
                            <Text style={styles.walletLabel}>Apple Pay</Text>
                        </View>
                        <Circle size={20} color={COLORS.gray} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.walletItem, styles.noBorder]}
                    >
                        <View style={styles.walletLeft}>
                            <View
                                style={[
                                    styles.walletIcon,
                                    { backgroundColor: '#4285F4' },
                                ]}
                            >
                                <Text style={styles.appleText}>G</Text>
                            </View>
                            <Text style={styles.walletLabel}>Google Pay</Text>
                        </View>
                        <Circle size={20} color={COLORS.gray} />
                    </TouchableOpacity>
                </View>

                <View style={styles.securityNote}>
                    <ShieldCheck size={16} color={COLORS.gray} />
                    <Text style={styles.securityText}>
                        Your payment information is encrypted and securely
                        stored.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// Simple inline SVG-like component for the security icon since Lucide might not have ShieldCheck in some versions
const ShieldCheck = ({ size, color }: { size: number; color: string }) => (
    <View
        style={{
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <View
            style={{
                width: size - 4,
                height: size - 2,
                borderWidth: 1.5,
                borderColor: color,
                borderRadius: 2,
            }}
        />
    </View>
);

export default PaymentMethods;
