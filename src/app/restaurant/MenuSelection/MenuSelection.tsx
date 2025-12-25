// beqav03/mobapp/src/app/restaurant/MenuSelection/MenuSelection.tsx

import { COLORS } from '@/src/constants/colors';
import { MenuItem } from '@/src/types';
import { formatPrice } from '@/src/utils/helpers';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './MenuSelection.styles';

const MENU_ITEMS: MenuItem[] = [
    {
        id: '1',
        restaurantId: '1',
        name: 'Double Cheeseburger',
        description: '',
        price: 8.5,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'Burgers',
    },
    {
        id: '2',
        restaurantId: '1',
        name: 'Chicken Nuggets',
        description: '',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1562967963-ed7b699c3c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        category: 'Sides',
    },
    {
        id: '3',
        restaurantId: '1',
        name: 'French Fries',
        description: '',
        price: 3.5,
        image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd4054?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'Sides',
    },
];

export const MenuSelection = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const params = route.params || {};

    const [cart, setCart] = useState<Record<string, number>>({});

    const updateQuantity = (itemId: string, delta: number) => {
        setCart((prev) => {
            const current = prev[itemId] || 0;
            const next = Math.max(0, current + delta);
            if (next === 0) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [itemId]: next };
        });
    };

    const calculateTotal = () => {
        return Object.entries(cart).reduce((total, [itemId, qty]) => {
            const item = MENU_ITEMS.find((i) => i.id === itemId);
            return total + (item ? item.price * qty : 0);
        }, 0);
    };

    const handleCheckout = () => {
        // Convert cart to array of items with quantities
        const items = Object.entries(cart)
            .map(([itemId, qty]) => {
                const item = MENU_ITEMS.find((i) => i.id === itemId);
                return item ? { ...item, quantity: qty } : null;
            })
            .filter(Boolean);

        navigation.navigate('Checkout', {
            ...params,
            items,
            total: calculateTotal(),
        });
    };

    const renderItem = ({ item }: { item: MenuItem }) => (
        <View style={styles.menuItem}>
            <Image source={{ uri: item.image }} style={styles.menuImage} />
            <View style={styles.menuInfo}>
                <Text style={styles.menuName}>{item.name}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.menuPrice}>
                        {formatPrice(item.price)}
                    </Text>
                    <View style={styles.qtyContainer}>
                        <TouchableOpacity
                            style={styles.qtyButton}
                            onPress={() => updateQuantity(item.id, -1)}
                        >
                            <Text
                                style={{
                                    color: COLORS.text,
                                    fontWeight: 'bold',
                                }}
                            >
                                -
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.qtyText}>{cart[item.id] || 0}</Text>
                        <TouchableOpacity
                            style={[
                                styles.qtyButton,
                                { backgroundColor: COLORS.primary },
                            ]}
                            onPress={() => updateQuantity(item.id, 1)}
                        >
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontWeight: 'bold',
                                }}
                            >
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
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
                <Text style={styles.headerTitle}>Select Menu</Text>
                <TouchableOpacity onPress={handleCheckout}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={MENU_ITEMS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />

            <View style={styles.footer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalAmount}>
                        {formatPrice(calculateTotal())}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={handleCheckout}
                >
                    <Text style={styles.checkoutButtonText}>
                        Continue (
                        {Object.values(cart).reduce((a, b) => a + b, 0)})
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
