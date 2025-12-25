import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    ChevronLeft,
    Heart,
    MapPin,
    Navigation,
    Search,
    SlidersHorizontal,
    Star,
    X,
} from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
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
import styles from './Map.styles';

const { width } = Dimensions.get('window');

const Map = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [selectedRestaurant, setSelectedRestaurant] =
        useState<Restaurant | null>(mockRestaurants[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Georgian', 'Italian', 'Asian', 'French'];

    const filteredRestaurants = useMemo(() => {
        return mockRestaurants.filter((r) => {
            const matchesCategory =
                activeCategory === 'All' || r.cuisine === activeCategory;
            const matchesSearch = r.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const handleMarkerPress = (restaurant: Restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Mock Map Background - In a real app this would be <MapView> */}
            <View style={styles.mapMockContainer}>
                <View style={styles.gridOverlay} />

                {/* Animated Markers */}
                {filteredRestaurants.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.markerContainer,
                            // Hardcoded mock positions for visual demonstration
                            item.id === 'r1'
                                ? { top: '30%', left: '40%' }
                                : { top: '55%', left: '60%' },
                            selectedRestaurant?.id === item.id &&
                                styles.markerActive,
                        ]}
                        onPress={() => handleMarkerPress(item)}
                    >
                        <View
                            style={[
                                styles.markerPin,
                                selectedRestaurant?.id === item.id &&
                                    styles.markerPinActive,
                            ]}
                        >
                            <MapPin
                                size={20}
                                color={
                                    selectedRestaurant?.id === item.id
                                        ? COLORS.white
                                        : COLORS.primary
                                }
                            />
                        </View>
                        <View style={styles.markerLabel}>
                            <Text style={styles.markerLabelText}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Top Search Overlay */}
            <SafeAreaView style={styles.overlayTop}>
                <View style={styles.searchHeader}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.iconBtn}
                    >
                        <ChevronLeft size={24} color={COLORS.text} />
                    </TouchableOpacity>
                    <View style={styles.searchBar}>
                        <Search size={18} color={COLORS.gray} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search area..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        {searchQuery.length > 0 && (
                            <TouchableOpacity
                                onPress={() => setSearchQuery('')}
                            >
                                <X size={18} color={COLORS.gray} />
                            </TouchableOpacity>
                        )}
                    </View>
                    <TouchableOpacity style={styles.iconBtn}>
                        <SlidersHorizontal size={20} color={COLORS.text} />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.categoryScroll}
                    contentContainerStyle={styles.categoryPadding}
                >
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            style={[
                                styles.chip,
                                activeCategory === cat && styles.chipActive,
                            ]}
                            onPress={() => setActiveCategory(cat)}
                        >
                            <Text
                                style={[
                                    styles.chipText,
                                    activeCategory === cat &&
                                        styles.chipTextActive,
                                ]}
                            >
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>

            {/* Bottom Quick Preview Card */}
            {selectedRestaurant && (
                <View style={styles.bottomCardContainer}>
                    <TouchableOpacity
                        style={styles.previewCard}
                        activeOpacity={0.9}
                        onPress={() =>
                            navigation.navigate('Restaurant', {
                                restaurantId: selectedRestaurant.id,
                            })
                        }
                    >
                        <Image
                            source={selectedRestaurant.image}
                            style={styles.previewImage}
                        />
                        <View style={styles.previewContent}>
                            <View style={styles.previewHeader}>
                                <Text style={styles.previewName}>
                                    {selectedRestaurant.name}
                                </Text>
                                <TouchableOpacity style={styles.heartBtn}>
                                    <Heart size={18} color={COLORS.gray} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.previewMeta}>
                                <View style={styles.ratingBox}>
                                    <Star
                                        size={14}
                                        color="#FFCC00"
                                        fill="#FFCC00"
                                    />
                                    <Text style={styles.ratingText}>
                                        {selectedRestaurant.rating}
                                    </Text>
                                </View>
                                <Text style={styles.metaText}>•</Text>
                                <Text style={styles.metaText}>
                                    {selectedRestaurant.cuisine}
                                </Text>
                                <Text style={styles.metaText}>•</Text>
                                <Text style={styles.metaText}>$$</Text>
                            </View>

                            <View style={styles.addressRow}>
                                <MapPin size={12} color={COLORS.gray} />
                                <Text
                                    style={styles.addressText}
                                    numberOfLines={1}
                                >
                                    {selectedRestaurant.address}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.bookShortcutBtn}
                                onPress={() =>
                                    navigation.navigate('Restaurant', {
                                        restaurantId: selectedRestaurant.id,
                                    })
                                }
                            >
                                <Text style={styles.bookBtnText}>
                                    Book a Table
                                </Text>
                                <Navigation size={16} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default Map;
