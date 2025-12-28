import React, { useState, useMemo } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChevronLeft, Info, Users, Armchair } from 'lucide-react-native';
import { RootStackParamList } from '../../../navigation/types';
import { mockRestaurants } from '../../../services/dataService';
import { COLORS } from '../../../constants/colors';
import styles from './TableSelection.styles';

type TableSelectionRouteProp = RouteProp<RootStackParamList, 'TableSelection'>;

const TableSelection = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<TableSelectionRouteProp>();
    const { restaurantId } = route.params;

    const restaurant = useMemo(
        () =>
            mockRestaurants.find((r) => r.id === restaurantId) ||
            mockRestaurants[0],
        [restaurantId],
    );

    const [selectedTableId, setSelectedTableId] = useState<string | null>(null);

    const handleContinue = () => {
        if (selectedTableId) {
            navigation.navigate('MenuSelection', {
                restaurantId,
                tableId: selectedTableId,
            });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <ChevronLeft size={28} color={COLORS.text} />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>Select a Table</Text>
                    <Text style={styles.headerSubtitle}>{restaurant.name}</Text>
                </View>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Floor Plan Legend */}
                <View style={styles.legend}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendBox, styles.availableBox]} />
                        <Text style={styles.legendText}>Available</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendBox, styles.selectedBox]} />
                        <Text style={styles.legendText}>Selected</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendBox, styles.occupiedBox]} />
                        <Text style={styles.legendText}>Occupied</Text>
                    </View>
                </View>

                {/* Visual Floor Plan */}
                <View style={styles.floorPlanContainer}>
                    <View style={styles.entranceLabel}>
                        <Text style={styles.entranceText}>ENTRANCE</Text>
                    </View>

                    <View style={styles.tablesGrid}>
                        {restaurant.tables.map((table) => (
                            <TouchableOpacity
                                key={table.id}
                                disabled={!table.isAvailable}
                                style={[
                                    styles.tableCard,
                                    !table.isAvailable && styles.occupiedTable,
                                    selectedTableId === table.id &&
                                        styles.selectedTable,
                                ]}
                                onPress={() => setSelectedTableId(table.id)}
                            >
                                <Armchair
                                    size={24}
                                    color={
                                        !table.isAvailable
                                            ? COLORS.gray
                                            : selectedTableId === table.id
                                            ? COLORS.white
                                            : COLORS.primary
                                    }
                                />
                                <Text
                                    style={[
                                        styles.tableNumber,
                                        !table.isAvailable &&
                                            styles.occupiedText,
                                        selectedTableId === table.id &&
                                            styles.selectedText,
                                    ]}
                                >
                                    T-{table.number}
                                </Text>
                                <View style={styles.capacityBadge}>
                                    <Users
                                        size={10}
                                        color={
                                            selectedTableId === table.id
                                                ? COLORS.white
                                                : COLORS.gray
                                        }
                                    />
                                    <Text
                                        style={[
                                            styles.capacityText,
                                            selectedTableId === table.id &&
                                                styles.selectedText,
                                        ]}
                                    >
                                        {table.capacity}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.windowLabel}>
                        <Text style={styles.windowText}>WINDOW SEATING</Text>
                    </View>
                </View>

                <View style={styles.tipContainer}>
                    <Info size={16} color={COLORS.gray} />
                    <Text style={styles.tipText}>
                        Tables are subject to availability. High-demand spots
                        may have a minimum spending limit.
                    </Text>
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.selectionInfo}>
                    <Text style={styles.selectionLabel}>Table Selected</Text>
                    <Text style={styles.selectionValue}>
                        {selectedTableId
                            ? `Table ${
                                  restaurant.tables.find(
                                      (t) => t.id === selectedTableId,
                                  )?.number
                              }`
                            : 'None'}
                    </Text>
                </View>
                <TouchableOpacity
                    style={[
                        styles.continueButton,
                        !selectedTableId && styles.disabledButton,
                    ]}
                    disabled={!selectedTableId}
                    onPress={handleContinue}
                >
                    <Text style={styles.continueButtonText}>
                        Next: Pre-order
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default TableSelection;
