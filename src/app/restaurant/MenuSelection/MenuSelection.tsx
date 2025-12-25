import React, { useState, useMemo } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    FlatList,
    Image,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChevronLeft, Plus, Minus, ShoppingBag } from 'lucide-react-native';
import { MainStackParamList } from '../../../navigation/types';
import { mockRestaurants } from '../../../services/dataService';
import { MenuItem } from '../../../types';
import { COLORS } from '../../../constants/colors';
import styles from './MenuSelection.styles';

type MenuSelectionRouteProp = RouteProp<MainStackParamList, 'MenuSelection'>;

const MenuSelection = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const route = useRoute<MenuSelectionRouteProp>();
    const { restaurantId, tableId } = route.params;

    const restaurant = useMemo(
        () =>
            mockRestaurants.find((r) => r.id === restaurantId) ||
            mockRestaurants[0],
        [restaurantId],
    );

    const [cart, setCart] = useState<{ itemId: string; quantity: number }[]>(
        [],
    );

    const updateQuantity = (itemId: string, delta: number) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.itemId === itemId);
            if (existing) {
                const newQty = Math.max(0, existing.quantity + delta);
                if (newQty === 0)
                    return prev.filter((i) => i.itemId !== itemId);
                return prev.map((i) =>
                    i.itemId === itemId ? { ...i, quantity: newQty } : i,
                );
            }
            if (delta > 0) return [...prev, { itemId, quantity: 1 }];
            return prev;
        });
    };

    const cartTotal = useMemo(() => {
        return cart.reduce((acc, item) => {
            const menu = restaurant.menu.find((m) => m.id === item.itemId);
            return acc + (menu?.price || 0) * item.quantity;
        }, 0);
    }, [cart, restaurant.menu]);

    const renderMenuItem = ({ item }: { item: MenuItem }) => {
        const quantity = cart.find((i) => i.itemId === item.id)?.quantity || 0;

        return (
            <View style={styles.menuCard}>
                <Image source={item.image} style={styles.menuImage} />
                <View style={styles.menuInfo}>
                    <Text style={styles.menuName}>{item.name}</Text>
                    <Text style={styles.menuDesc} numberOfLines={2}>
                        {item.description}
                    </Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.menuPrice}>
                            ${item.price.toFixed(2)}
                        </Text>
                        <View style={styles.quantityContainer}>
                            {quantity > 0 && (
                                <>
                                    <TouchableOpacity
                                        onPress={() =>
                                            updateQuantity(item.id, -1)
                                        }
                                        style={styles.qtyBtn}
                                    >
                                        <Minus
                                            size={16}
                                            color={COLORS.primary}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.qtyText}>
                                        {quantity}
                                    </Text>
                                </>
                            )}
                            <TouchableOpacity
                                onPress={() => updateQuantity(item.id, 1)}
                                style={[styles.qtyBtn, styles.primaryBtn]}
                            >
                                <Plus
                                    size={16}
                                    color={
                                        quantity > 0
                                            ? COLORS.white
                                            : COLORS.primary
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

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
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>Pre-order Menu</Text>
                    <Text style={styles.headerSubtitle}>
                        Optional: Choose your items
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Booking', {
                            restaurantId,
                            tableId,
                        })
                    }
                    style={styles.skipButton}
                >
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={restaurant.menu}
                keyExtractor={(item) => item.id}
                renderItem={renderMenuItem}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.footer}>
                <View style={styles.cartInfo}>
                    <View style={styles.cartIconWrapper}>
                        <ShoppingBag size={20} color={COLORS.primary} />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                {cart.reduce((a, b) => a + b.quantity, 0)}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.totalText}>
                        ${cartTotal.toFixed(2)}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={() =>
                        navigation.navigate('Booking', {
                            restaurantId,
                            tableId,
                        })
                    }
                >
                    <Text style={styles.confirmButtonText}>Review Booking</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MenuSelection;
