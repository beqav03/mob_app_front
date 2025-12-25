import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    Clock,
    Search as SearchIcon,
    SlidersHorizontal,
    Star,
    X
} from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import {
    FlatList,
    Image,
    Keyboard,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../../../constants/colors';
import { MainStackParamList } from '../../../navigation/types';
import { mockRestaurants } from '../../../services/dataService';
import { Restaurant } from '../../../types';
import styles from './Search.styles';

const Search = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        'All',
        'Georgian',
        'Italian',
        'Asian',
        'French',
        'Steakhouse',
        'Dessert',
    ];

    const filteredResults = useMemo(() => {
        return mockRestaurants.filter((restaurant) => {
            const matchesQuery =
                restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
                restaurant.cuisine
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                restaurant.address.toLowerCase().includes(query.toLowerCase());

            const matchesCategory =
                selectedCategory === 'All' ||
                restaurant.cuisine === selectedCategory;

            return matchesQuery && matchesCategory;
        });
    }, [query, selectedCategory]);

    const clearSearch = () => {
        setQuery('');
        Keyboard.dismiss();
    };

    const renderRestaurantItem = ({ item }: { item: Restaurant }) => (
        <TouchableOpacity
            style={styles.resultCard}
            onPress={() =>
                navigation.navigate('Restaurant', { restaurantId: item.id })
            }
        >
            <Image source={item.image} style={styles.resultImage} />
            <View style={styles.resultInfo}>
                <View style={styles.resultHeader}>
                    <Text style={styles.resultName}>{item.name}</Text>
                    <View style={styles.ratingRow}>
                        <Star
                            size={12}
                            color={COLORS.primary}
                            fill={COLORS.primary}
                        />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                </View>

                <Text style={styles.cuisineText}>
                    {item.cuisine} • {item.address}
                </Text>

                <View style={styles.statusRow}>
                    <View style={styles.availabilityBadge}>
                        <Clock size={12} color={COLORS.primary} />
                        <Text style={styles.availabilityText}>
                            {item.tables.filter((t) => t.isAvailable).length}{' '}
                            tables available
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Search Header */}
            <View style={styles.header}>
                <View style={styles.searchBarWrapper}>
                    <View style={styles.searchBar}>
                        <SearchIcon size={20} color={COLORS.gray} />
                        <TextInput
                            style={styles.input}
                            placeholder="Search for restaurants or cuisines"
                            value={query}
                            onChangeText={setQuery}
                            placeholderTextColor={COLORS.gray}
                            returnKeyType="search"
                        />
                        {query.length > 0 && (
                            <TouchableOpacity onPress={clearSearch}>
                                <X size={20} color={COLORS.gray} />
                            </TouchableOpacity>
                        )}
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <SlidersHorizontal size={20} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Category Tabs */}
            <View style={styles.categoryContainer}>
                <FlatList
                    horizontal
                    data={categories}
                    keyExtractor={(item) => item}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoryList}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.categoryChip,
                                selectedCategory === item &&
                                    styles.activeCategoryChip,
                            ]}
                            onPress={() => setSelectedCategory(item)}
                        >
                            <Text
                                style={[
                                    styles.categoryChipText,
                                    selectedCategory === item &&
                                        styles.activeCategoryChipText,
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Results */}
            {filteredResults.length > 0 ? (
                <FlatList
                    data={filteredResults}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRestaurantItem}
                    contentContainerStyle={styles.resultsList}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <View style={styles.emptyIconCircle}>
                        <SearchIcon size={40} color={COLORS.gray} />
                    </View>
                    <Text style={styles.emptyTitle}>No results found</Text>
                    <Text style={styles.emptySubtitle}>
                        Try adjusting your search or filters to find what you're
                        looking for.
                    </Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Search;
