import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './PaymentMethods.styles';
import { COLORS } from '@/src/constants/colors';

const CARDS = [
    {
        id: '1',
        number: '•••• •••• •••• 4242',
        holder: 'John Doe',
        expiry: '12/24',
        type: 'VISA',
    },
    {
        id: '2',
        number: '•••• •••• •••• 8888',
        holder: 'John Doe',
        expiry: '09/25',
        type: 'MasterCard',
    },
];

export const PaymentMethods = () => {
    const navigation = useNavigation();

    const handleAddCard = () => {
        Alert.alert('Info', 'Add Card functionality would open a form here.');
    };

    const renderCard = ({ item }: any) => (
        <View
            style={[
                styles.cardItem,
                item.type === 'VISA'
                    ? { backgroundColor: '#1A1F71' }
                    : { backgroundColor: '#222' },
            ]}
        >
            <View style={styles.cardHeader}>
                <Text style={styles.cardLogo}>{item.type}</Text>
                <Text style={{ color: COLORS.white }}>PayWave</Text>
            </View>
            <Text style={styles.cardNumber}>{item.number}</Text>
            <View style={styles.cardFooter}>
                <View>
                    <Text style={styles.cardLabel}>CARD HOLDER</Text>
                    <Text style={styles.cardValue}>
                        {item.holder.toUpperCase()}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardLabel}>EXPIRES</Text>
                    <Text style={styles.cardValue}>{item.expiry}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payment Methods</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    data={CARDS}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                />

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddCard}
                >
                    <Text style={{ fontSize: 24, color: COLORS.text }}>+</Text>
                    <Text style={styles.addButtonText}>Add New Card</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
