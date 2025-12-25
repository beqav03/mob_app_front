// beqav03/mobapp/src/app/main/Saved/Saved.tsx

import { COLORS } from '@/src/constants/colors';
import React from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './Saved.styles';

// Mock Data
const SAVED_ITEMS = [
    {
        id: '1',
        name: 'Burger King',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        rating: 4.5,
        distance: '1.2 km',
    },
    {
        id: '2',
        name: 'Pizza Hut',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        rating: 4.2,
        distance: '2.5 km',
    },
];

export const Saved = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Saved</Text>
            </View>

            <FlatList
                data={SAVED_ITEMS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={{ fontSize: 40 }}>💔</Text>
                        <Text style={styles.emptyText}>
                            No saved restaurants yet.
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.itemImage}
                        />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemMeta}>
                                ★ {item.rating} • {item.distance}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.heartButton}>
                            <Text
                                style={{ color: COLORS.primary, fontSize: 20 }}
                            >
                                ❤️
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};
