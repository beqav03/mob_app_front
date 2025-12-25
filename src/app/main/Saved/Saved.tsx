import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Star, Heart, MapPin } from 'lucide-react-native';
import { MainStackParamList } from '../../../navigation/types';
import { mockRestaurants } from '../../../services/dataService';
import { Restaurant } from '../../../types';
import { COLORS } from '../../../constants/colors';
import styles from './Saved.styles';

const Saved = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    // Using mockRestaurants as placeholder for saved items
    const savedRestaurants = mockRestaurants;

    const renderSavedItem = ({ item }: { item: Restaurant }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate('Restaurant', { restaurantId: item.id })
            }
        >
            <Image source={item.image} style={styles.image} />
            <TouchableOpacity style={styles.heartButton}>
                <Heart size={20} color={COLORS.white} fill={COLORS.white} />
            </TouchableOpacity>

            <View style={styles.content}>
                <View style={styles.headerRow}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.ratingBadge}>
                        <Star
                            size={14}
                            color={COLORS.primary}
                            fill={COLORS.primary}
                        />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                </View>

                <View style={styles.locationRow}>
                    <MapPin size={14} color={COLORS.gray} />
                    <Text style={styles.locationText}>
                        {item.cuisine} • {item.address}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.bookButton}
                    onPress={() =>
                        navigation.navigate('Booking', {
                            restaurantId: item.id,
                        })
                    }
                >
                    <Text style={styles.bookButtonText}>Book a Table</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.title}>Saved Restaurants</Text>
                <Text style={styles.subtitle}>
                    {savedRestaurants.length} places you love
                </Text>
            </View>

            {savedRestaurants.length > 0 ? (
                <FlatList
                    data={savedRestaurants}
                    keyExtractor={(item) => item.id}
                    renderItem={renderSavedItem}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Heart size={64} color={COLORS.lightGray} />
                    <Text style={styles.emptyTitle}>No saved places yet</Text>
                    <Text style={styles.emptySubtitle}>
                        Tap the heart icon on any restaurant to save it for
                        later.
                    </Text>
                    <TouchableOpacity
                        style={styles.exploreButton}
                        onPress={() =>
                            navigation.navigate('Tabs', { screen: 'Home' })
                        }
                    >
                        <Text style={styles.exploreButtonText}>
                            Explore Restaurants
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Saved;
