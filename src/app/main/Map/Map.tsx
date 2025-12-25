import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Map.styles';
import { COLORS } from '@/src/constants/colors';
import { Restaurant } from '@/src/types';

// Conditionally require react-native-maps to avoid crashes on Web or if not installed
let MapView: any;
let Marker: any;
let PROVIDER_GOOGLE: any;

if (Platform.OS !== 'web') {
    try {
        const Maps = require('react-native-maps');
        MapView = Maps.default;
        Marker = Maps.Marker;
        PROVIDER_GOOGLE = Maps.PROVIDER_GOOGLE;
    } catch (e) {
        console.warn('react-native-maps not found', e);
        // Fallback components to prevent crash if library is missing
        MapView = View;
        Marker = View;
    }
} else {
    // Web Fallback
    MapView = View;
    Marker = View;
}

const { width } = Dimensions.get('window');

// Mock Data
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
];

export const Map = () => {
    const navigation = useNavigation<any>();
    const mapRef = useRef<any>(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isMapReady, setIsMapReady] = useState(false);

    const initialRegion = {
        latitude: 41.7151,
        longitude: 44.8271,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    useEffect(() => {
        // Small delay to ensure native modules are ready
        if (Platform.OS !== 'web') {
            setTimeout(() => setIsMapReady(true), 100);
        }
    }, []);

    const onMarkerPress = (id: string) => {
        setSelectedId(id);
    };

    const renderCard = ({ item }: { item: Restaurant }) => (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={() =>
                navigation.navigate('Restaurant', { restaurantId: item.id })
            }
        >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <View style={styles.cardMeta}>
                    <Text>★</Text>
                    <Text style={styles.cardMetaText}>
                        {item.rating} ({item.reviews})
                    </Text>
                </View>
                <View style={styles.cardMeta}>
                    <Text>🕒</Text>
                    <Text style={styles.cardMetaText}>
                        {item.deliveryTime} • {item.distance}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    // Fallback for Web
    if (Platform.OS === 'web') {
        return (
            <View
                style={[
                    styles.container,
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                    },
                ]}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: COLORS.text,
                        textAlign: 'center',
                        marginBottom: 10,
                    }}
                >
                    Map View is optimized for Mobile.
                </Text>
                <Text style={{ color: COLORS.textLight, textAlign: 'center' }}>
                    Please run on an iOS or Android simulator to view the map.
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginTop: 20 }}
                >
                    <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
                        Go Back
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    // Waiting for map module
    if (!isMapReady) {
        return <View style={styles.container} />;
    }

    return (
        <View style={styles.container}>
            {MapView && (
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={initialRegion}
                    showsUserLocation={true}
                >
                    {RESTAURANTS.map((marker) => (
                        <Marker
                            key={marker.id}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            title={marker.name}
                            onPress={() => onMarkerPress(marker.id)}
                        >
                            <View
                                style={{
                                    backgroundColor:
                                        selectedId === marker.id
                                            ? COLORS.primary
                                            : COLORS.white,
                                    padding: 5,
                                    borderRadius: 20,
                                    borderWidth: 2,
                                    borderColor: COLORS.primary,
                                }}
                            >
                                <Image
                                    source={{ uri: marker.image }}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15,
                                    }}
                                />
                            </View>
                        </Marker>
                    ))}
                </MapView>
            )}

            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Text>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search on map..."
                    />
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{ color: COLORS.white }}>⚙️</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.carouselContainer}>
                <FlatList
                    horizontal
                    data={RESTAURANTS}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width * 0.8 + 20}
                    decelerationRate="fast"
                    pagingEnabled
                />
            </View>
        </View>
    );
};
