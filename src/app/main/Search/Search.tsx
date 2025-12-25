import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Search.styles';
import { COLORS } from '@/src/constants/colors';
import { Restaurant } from '@/src/types';

// Mock Data
const ALL_RESTAURANTS: Restaurant[] = [
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
];

const RECENT_SEARCHES = ['Sushi', 'Burger', 'Pizza'];

export const Search = () => {
    const navigation = useNavigation<any>();
    const [query, setQuery] = useState('');

    const filteredRestaurants = query
        ? ALL_RESTAURANTS.filter((r) =>
              r.name.toLowerCase().includes(query.toLowerCase()),
          )
        : [];

    const handleSearch = (text: string) => {
        setQuery(text);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Text>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for food or restaurants"
                        value={query}
                        onChangeText={handleSearch}
                        autoFocus
                    />
                    {query.length > 0 && (
                        <TouchableOpacity onPress={() => setQuery('')}>
                            <Text>✕</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View style={styles.content}>
                {query.length === 0 ? (
                    <>
                        <Text style={styles.sectionTitle}>Recent Searches</Text>
                        {RECENT_SEARCHES.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.recentItem}
                                onPress={() => setQuery(item)}
                            >
                                <Text style={styles.recentIcon}>🕒</Text>
                                <Text style={styles.recentText}>{item}</Text>
                                <Text style={styles.recentIcon}>↖</Text>
                            </TouchableOpacity>
                        ))}
                    </>
                ) : (
                    <FlatList
                        data={filteredRestaurants}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.resultCard}
                                onPress={() =>
                                    navigation.navigate('Restaurant', {
                                        restaurantId: item.id,
                                    })
                                }
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.resultImage}
                                />
                                <View style={styles.resultInfo}>
                                    <Text style={styles.resultName}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.resultMeta}>
                                        ★ {item.rating} • {item.deliveryTime}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        ListEmptyComponent={
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginTop: 20,
                                    color: COLORS.textLight,
                                }}
                            >
                                No results found.
                            </Text>
                        }
                    />
                )}
            </View>
        </SafeAreaView>
    );
};
