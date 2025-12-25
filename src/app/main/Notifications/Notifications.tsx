import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { styles } from './Notifications.styles';

const NOTIFICATIONS = [
    {
        id: '1',
        title: 'Order Confirmed',
        message: 'Your order at Burger King has been confirmed.',
        time: '10:30 AM',
        icon: '✅',
    },
    {
        id: '2',
        title: 'New Offer',
        message: 'Get 20% off on your next order!',
        time: 'Yesterday',
        icon: '🏷️',
    },
];

export const Notifications = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Notifications</Text>
            </View>

            <FlatList
                data={NOTIFICATIONS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemMessage}>
                                {item.message}
                            </Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};
