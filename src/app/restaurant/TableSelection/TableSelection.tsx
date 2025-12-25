// beqav03/mobapp/src/app/restaurant/TableSelection/TableSelection.tsx

import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './TableSelection.styles';
import { Table } from '@/src/types';
import { COLORS } from '@/src/constants/colors';

// Mock Tables
const TABLES: Table[] = [
    {
        id: 't1',
        restaurantId: '1',
        number: 1,
        capacity: 2,
        isOccupied: false,
        shape: 'round',
        position: { x: 50, y: 50 },
    },
    {
        id: 't2',
        restaurantId: '1',
        number: 2,
        capacity: 4,
        isOccupied: true,
        shape: 'rect',
        position: { x: 150, y: 50 },
    },
    {
        id: 't3',
        restaurantId: '1',
        number: 3,
        capacity: 4,
        isOccupied: false,
        shape: 'rect',
        position: { x: 50, y: 150 },
    },
    {
        id: 't4',
        restaurantId: '1',
        number: 4,
        capacity: 6,
        isOccupied: false,
        shape: 'rect',
        position: { x: 150, y: 150 },
    },
    {
        id: 't5',
        restaurantId: '1',
        number: 5,
        capacity: 2,
        isOccupied: false,
        shape: 'round',
        position: { x: 250, y: 100 },
    },
];

export const TableSelection = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { restaurantId, guests, date, time } = route.params || {};
    const [selectedTableId, setSelectedTableId] = useState<string | null>(null);

    const handleSelectTable = (table: Table) => {
        if (table.isOccupied) return;
        setSelectedTableId(table.id);
    };

    const handleNext = () => {
        if (!selectedTableId) {
            Alert.alert('Select Table', 'Please select a table to continue.');
            return;
        }
        navigation.navigate('MenuSelection', {
            restaurantId,
            tableId: selectedTableId,
            guests,
            date,
            time,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.goBack()}
            >
                <Text style={{ fontSize: 20 }}>←</Text>
            </TouchableOpacity>

            <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                    <View
                        style={[
                            styles.legendColor,
                            { backgroundColor: COLORS.white },
                        ]}
                    />
                    <Text style={styles.legendText}>Available</Text>
                </View>
                <View style={styles.legendItem}>
                    <View
                        style={[
                            styles.legendColor,
                            { backgroundColor: COLORS.error },
                        ]}
                    />
                    <Text style={styles.legendText}>Occupied</Text>
                </View>
                <View style={styles.legendItem}>
                    <View
                        style={[
                            styles.legendColor,
                            { backgroundColor: COLORS.primary },
                        ]}
                    />
                    <Text style={styles.legendText}>Selected</Text>
                </View>
            </View>

            <View style={styles.floorPlan}>
                {/* Simple absolute positioning simulation or flex wrap grid */}
                <View
                    style={{
                        width: 350,
                        height: 400,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {TABLES.map((table) => (
                        <TouchableOpacity
                            key={table.id}
                            style={[
                                styles.table,
                                table.shape === 'round'
                                    ? styles.tableRound
                                    : styles.tableRect,
                                {
                                    width: table.capacity * 20,
                                    height: table.capacity * 20,
                                    backgroundColor: table.isOccupied
                                        ? COLORS.error
                                        : selectedTableId === table.id
                                        ? COLORS.primary
                                        : COLORS.white,
                                },
                            ]}
                            disabled={table.isOccupied}
                            onPress={() => handleSelectTable(table)}
                        >
                            <Text
                                style={[
                                    styles.tableText,
                                    {
                                        color:
                                            table.isOccupied ||
                                            selectedTableId === table.id
                                                ? COLORS.white
                                                : COLORS.black,
                                    },
                                ]}
                            >
                                {table.number}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.selectedInfo}>
                    {selectedTableId
                        ? `Table #${
                              TABLES.find((t) => t.id === selectedTableId)
                                  ?.number
                          } selected`
                        : 'Please select a table'}
                </Text>
                <TouchableOpacity
                    style={[
                        styles.button,
                        !selectedTableId && styles.buttonDisabled,
                    ]}
                    onPress={handleNext}
                    disabled={!selectedTableId}
                >
                    <Text style={styles.buttonText}>Confirm Table</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
