import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    Search,
    MapPin,
    Bell,
    SlidersHorizontal,
    Star,
} from 'lucide-react-native';
import { RootStackParamList } from '../../../navigation/types';
import { mockRestaurants, mockUser } from '../../../services/dataService';
import { Restaurant } from '../../../types';
import { COLORS } from '../../../constants/colors';
import styles from './Home.styles';

const Home = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        'All',
        'Georgian',
        'Italian',
        'Asian',
        'French',
        'Steakhouse',
    ];

    const filteredRestaurants = mockRestaurants.filter((item) => {
        const matchesCategory =
            activeCategory === 'All' || item.cuisine === activeCategory;
        const matchesSearch = item.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const renderRestaurantCard = ({ item }: { item: Restaurant }) => (
        <TouchableOpacity
            style={styles.restaurantCard}
            onPress={() =>
                navigation.navigate('Restaurant', { restaurantId: item.id })
            }
        >
            <Image source={item.image} style={styles.restaurantImage} />
            <View style={styles.restaurantInfo}>
                <View style={styles.restaurantHeader}>
                    <Text style={styles.restaurantName}>{item.name}</Text>
                    <View style={styles.ratingBadge}>
                        <Star
                            size={14}
                            color={COLORS.primary}
                            fill={COLORS.primary}
                        />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                </View>
                <Text style={styles.restaurantCuisine}>
                    {item.cuisine} • {item.address}
                </Text>
                <View style={styles.bookingDetails}>
                    <Text style={styles.availableTables}>
                        {item.tables.filter((t) => t.isAvailable).length} tables
                        available
                    </Text>
                    <TouchableOpacity
                        style={styles.bookButton}
                        onPress={() =>
                            navigation.navigate('Booking', {
                                restaurantId: item.id,
                            })
                        }
                    >
                        <Text style={styles.bookButtonText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.locationLabel}>Location</Text>
                    <View style={styles.locationContainer}>
                        <MapPin size={16} color={COLORS.primary} />
                        <Text style={styles.locationText}>
                            Tbilisi, Georgia
                        </Text>
                    </View>
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Bell size={24} color={COLORS.text} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Image
                            source={{ uri: mockUser.avatar }}
                            style={styles.profileAvatar}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Search Bar */}
                <View style={styles.searchSection}>
                    <View style={styles.searchContainer}>
                        <Search size={20} color={COLORS.gray} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search restaurants, cuisines..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <SlidersHorizontal size={20} color={COLORS.white} />
                    </TouchableOpacity>
                </View>

                {/* Categories */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.categoryContainer}
                    contentContainerStyle={styles.categoryContent}
                >
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            style={[
                                styles.categoryItem,
                                activeCategory === cat &&
                                    styles.categoryItemActive,
                            ]}
                            onPress={() => setActiveCategory(cat)}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    activeCategory === cat &&
                                        styles.categoryTextActive,
                                ]}
                            >
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Featured Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Featured Restaurants
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See All</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    horizontal
                    data={mockRestaurants}
                    keyExtractor={(item) => `featured-${item.id}`}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.featuredCard}
                            onPress={() =>
                                navigation.navigate('Restaurant', {
                                    restaurantId: item.id,
                                })
                            }
                        >
                            <Image
                                source={item.image}
                                style={styles.featuredImage}
                            />
                            <View style={styles.featuredOverlay}>
                                <Text style={styles.featuredName}>
                                    {item.name}
                                </Text>
                                <View style={styles.featuredRating}>
                                    <Star
                                        size={12}
                                        color={COLORS.white}
                                        fill={COLORS.white}
                                    />
                                    <Text style={styles.featuredRatingText}>
                                        {item.rating}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.featuredList}
                />

                {/* Near You Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Available Near You</Text>
                </View>

                <FlatList
                    data={filteredRestaurants}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRestaurantCard}
                    scrollEnabled={false}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
