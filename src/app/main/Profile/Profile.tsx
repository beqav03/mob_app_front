import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Profile.styles';

// Mock User Data
const USER = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};

const MENU_ITEMS = [
    { id: '1', title: 'Edit Profile', icon: '👤', route: 'EditProfile' },
    { id: '2', title: 'Payment Methods', icon: '💳', route: 'PaymentMethods' },
    { id: '3', title: 'My Bookings', icon: '📅', route: 'MyBookings' },
    { id: '4', title: 'Settings', icon: '⚙️', route: 'Settings' },
    { id: '5', title: 'Support', icon: '🎧', route: 'Support' },
    { id: '6', title: 'Security', icon: '🔒', route: 'Security' },
];

export const Profile = () => {
    const navigation = useNavigation<any>();

    const handleLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Logout',
                style: 'destructive',
                onPress: () => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Auth' }],
                    });
                },
            },
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: USER.avatar }}
                            style={styles.avatar}
                        />
                    </View>
                    <Text style={styles.name}>{USER.name}</Text>
                    <Text style={styles.email}>{USER.email}</Text>
                </View>

                <View style={styles.menuContainer}>
                    {MENU_ITEMS.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.menuItem}
                            onPress={() => {
                                if (item.route) {
                                    navigation.navigate(item.route);
                                }
                            }}
                        >
                            <View style={styles.menuIcon}>
                                <Text style={{ fontSize: 20 }}>
                                    {item.icon}
                                </Text>
                            </View>
                            <Text style={styles.menuText}>{item.title}</Text>
                            <Text style={styles.arrow}>›</Text>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={handleLogout}
                    >
                        <Text>🚪</Text>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
