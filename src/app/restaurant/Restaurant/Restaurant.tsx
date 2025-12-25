import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './Restaurant.styles';
import { MenuItem } from '@/src/types';
import { COLORS } from '@/src/constants/colors';
import { formatPrice } from '@/src/utils/helpers';
// Mock Data
const MENU_ITEMS: MenuItem[] = [
    {
        id: '1',
        restaurantId: '1',
        name: 'Double Cheeseburger',
        description:
            'Two beef patties, cheddar cheese, pickles, onions, ketchup, and mustard.',
        price: 8.5,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'Burgers',
    },
    {
        id: '2',
        restaurantId: '1',
        name: 'Chicken Nuggets (10pc)',
        description:
            'Crispy breaded chicken breast nuggets served with your choice of dip.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1562967963-ed7b699c3c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        category: 'Sides',
    },
    {
        id: '3',
        restaurantId: '1',
        name: 'French Fries',
        description: 'Classic salted french fries, golden and crispy.',
        price: 3.5,
        image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd4054?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'Sides',
    },
];

export const RestaurantScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { restaurantId } = route.params || {};

    // Ideally fetch restaurant details using ID
    const restaurant = {
        name: 'Burger King',
        rating: 4.5,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        distance: '1.2 km',
        deliveryTime: '20-30 min',
        address: '123 Main St',
        description:
            'Home of the Whopper! We serve flame-grilled burgers, crispy fries, and delicious shakes. Come visit us for a quick and tasty meal.',
    };

    const handleBookTable = () => {
        navigation.navigate('TableSelection', { restaurantId });
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Image
                source={{ uri: restaurant.image }}
                style={styles.headerImage}
            />

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>←</Text>
            </TouchableOpacity>

            <ScrollView
                style={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <View style={styles.ratingBadge}>
                        <Text style={{ color: COLORS.white }}>★</Text>
                        <Text style={styles.ratingText}>
                            {restaurant.rating}
                        </Text>
                    </View>
                </View>

                <View style={styles.metaRow}>
                    <View style={styles.metaItem}>
                        <Text>🕒</Text>
                        <Text style={styles.metaText}>
                            {restaurant.deliveryTime}
                        </Text>
                    </View>
                    <View style={styles.metaItem}>
                        <Text>📍</Text>
                        <Text style={styles.metaText}>
                            {restaurant.distance}
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.description}>{restaurant.description}</Text>

                <Text style={styles.sectionTitle}>Menu</Text>
                {MENU_ITEMS.map((item) => (
                    <View key={item.id} style={styles.menuItem}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.menuImage}
                        />
                        <View style={styles.menuInfo}>
                            <Text style={styles.menuName}>{item.name}</Text>
                            <Text
                                style={styles.menuDescription}
                                numberOfLines={2}
                            >
                                {item.description}
                            </Text>
                            <View style={styles.menuFooter}>
                                <Text style={styles.price}>
                                    {formatPrice(item.price)}
                                </Text>
                                <TouchableOpacity style={styles.addButton}>
                                    <Text
                                        style={{
                                            color: COLORS.primary,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        +
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}

                <TouchableOpacity
                    style={styles.bookButton}
                    onPress={handleBookTable}
                    activeOpacity={0.8}
                >
                    <Text style={styles.bookButtonText}>Book a Table</Text>
                </TouchableOpacity>

                {/* Padding for scroll */}
                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
};
