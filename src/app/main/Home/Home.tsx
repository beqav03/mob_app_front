import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    StatusBar,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Home.styles';
import { Category, Restaurant } from '@/src/types';
import { COLORS } from '@/src/constants/colors';

// Mock Data (In a real app, this comes from dataService)
const CATEGORIES: Category[] = [
    {
        id: '1',
        name: 'Burger',
        image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    },
    {
        id: '2',
        name: 'Pizza',
        image: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png',
    },
    {
        id: '3',
        name: 'Sushi',
        image: 'https://cdn-icons-png.flaticon.com/512/2252/2252075.png',
    },
    {
        id: '4',
        name: 'Asian',
        image: 'https://cdn-icons-png.flaticon.com/512/3075/3075929.png',
    },
    {
        id: '5',
        name: 'Dessert',
        image: 'https://cdn-icons-png.flaticon.com/512/3075/3075922.png',
    },
];

const RESTAURANTS: Restaurant[] = [
    {
        id: '1',
        name: 'Burger King',
        rating: 4.5,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        distance: '1.2 km',
        deliveryTime: '20-30 min',
        minOrder: 10,
        deliveryFee: 2.5,
        tags: ['Burger', 'Fast Food', 'American'],
        latitude: 41.7151,
        longitude: 44.8271,
        address: '123 Main St',
    },
    {
        id: '2',
        name: 'Pizza Hut',
        rating: 4.2,
        reviews: 85,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        distance: '2.5 km',
        deliveryTime: '30-45 min',
        minOrder: 15,
        deliveryFee: 3.0,
        tags: ['Pizza', 'Italian', 'Fast Food'],
        latitude: 41.7251,
        longitude: 44.8371,
        address: '456 Elm St',
    },
    // Add more mock data as needed
];

export const Home = () => {
    const navigation = useNavigation<any>();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null,
    );
    const [searchQuery, setSearchQuery] = useState('');

    const renderCategory = ({ item }: { item: Category }) => (
        <TouchableOpacity
            style={styles.categoryItem}
            onPress={() =>
                setSelectedCategory(
                    selectedCategory === item.id ? null : item.id,
                )
            }
        >
            <View
                style={[
                    styles.categoryImageContainer,
                    selectedCategory === item.id && {
                        backgroundColor: COLORS.primary,
                    },
                ]}
            >
                <Image
                    source={{ uri: item.image }}
                    style={[
                        styles.categoryImage,
                        selectedCategory === item.id && {
                            tintColor: COLORS.white,
                        },
                    ]}
                />
            </View>
            <Text
                style={[
                    styles.categoryText,
                    selectedCategory === item.id && {
                        color: COLORS.primary,
                        fontWeight: 'bold',
                    },
                ]}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    const renderRestaurant = ({ item }: { item: Restaurant }) => (
        <TouchableOpacity
            style={styles.restaurantCard}
            activeOpacity={0.9}
            onPress={() =>
                navigation.navigate('Restaurant', { restaurantId: item.id })
            }
        >
            <Image
                source={{ uri: item.image }}
                style={styles.restaurantImage}
            />
            <View style={styles.restaurantInfo}>
                <View style={styles.restaurantHeader}>
                    <Text style={styles.restaurantName}>{item.name}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={{ color: COLORS.primary }}>★</Text>
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                </View>
                <View style={styles.restaurantMeta}>
                    <Text style={{ color: COLORS.primary }}>🕒</Text>
                    <Text style={styles.metaText}>{item.deliveryTime}</Text>
                    <Text style={{ color: COLORS.primary }}>📍</Text>
                    <Text style={styles.metaText}>{item.distance}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    // Filter restaurants based on search and category
    const filteredRestaurants = RESTAURANTS.filter((r) => {
        const matchesSearch = r.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory
            ? r.tags.some(
                  (tag) =>
                      tag.toLowerCase() ===
                      CATEGORIES.find(
                          (c) => c.id === selectedCategory,
                      )?.name.toLowerCase(),
              )
            : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={COLORS.background}
            />

            <View style={styles.header}>
                <View>
                    <Text style={styles.subGreeting}>Deliver to</Text>
                    <Text style={styles.greeting}>Home ▾</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/32.jpg',
                    }}
                    style={styles.profileImage}
                />
            </View>

            <View style={styles.searchContainer}>
                <Text>🔍</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Find restaurants..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.sectionTitle}>Categories</Text>
                    <FlatList
                        horizontal
                        data={CATEGORIES}
                        renderItem={renderCategory}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesContainer}
                    />
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Popular Near You</Text>
                    <FlatList
                        data={filteredRestaurants}
                        renderItem={renderRestaurant}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false} // Since it's inside a ScrollView
                        contentContainerStyle={styles.restaurantList}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
