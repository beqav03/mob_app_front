import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    User,
    ChevronRight,
    Settings,
    ShieldCheck,
    CreditCard,
    Headset,
    LogOut,
    Calendar,
    Bell,
} from 'lucide-react-native';
import { RootStackParamList } from '../../../navigation/types';
import { mockUser } from '../../../services/dataService';
import { COLORS } from '../../../constants/colors';
import styles from './Profile.styles';

const Profile = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const menuItems = [
        {
            title: 'Account Settings',
            items: [
                {
                    id: 'edit',
                    label: 'Edit Profile',
                    icon: User,
                    action: () => navigation.navigate('EditProfile'),
                },
                {
                    id: 'bookings',
                    label: 'My Bookings',
                    icon: Calendar,
                    action: () => navigation.navigate('MyBookings'),
                },
                {
                    id: 'payments',
                    label: 'Payment Methods',
                    icon: CreditCard,
                    action: () => navigation.navigate('PaymentMethods' as any),
                },
            ],
        },
        {
            title: 'General',
            items: [
                {
                    id: 'notifications',
                    label: 'Notifications',
                    icon: Bell,
                    action: () => navigation.navigate('Notifications' as any),
                },
                {
                    id: 'security',
                    label: 'Security',
                    icon: ShieldCheck,
                    action: () => navigation.navigate('Security'),
                },
                {
                    id: 'settings',
                    label: 'Settings',
                    icon: Settings,
                    action: () => navigation.navigate('Settings'),
                },
            ],
        },
        {
            title: 'Support',
            items: [
                {
                    id: 'help',
                    label: 'Help & Support',
                    icon: Headset,
                    action: () => navigation.navigate('Support'),
                },
            ],
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Profile Header */}
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: mockUser.avatar }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.editBadge}>
                            <Text style={styles.editBadgeText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.userName}>{mockUser.name}</Text>
                    <Text style={styles.userEmail}>{mockUser.email}</Text>
                </View>

                {/* Menu Sections */}
                {menuItems.map((section, sectionIdx) => (
                    <View
                        key={section.title || sectionIdx}
                        style={styles.section}
                    >
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <View style={styles.menuContainer}>
                            {section.items.map((item, idx) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[
                                        styles.menuItem,
                                        idx === section.items.length - 1 &&
                                            styles.noBorder,
                                    ]}
                                    onPress={item.action}
                                >
                                    <View style={styles.menuLeft}>
                                        <View style={styles.iconContainer}>
                                            <item.icon
                                                size={20}
                                                color={COLORS.primary}
                                            />
                                        </View>
                                        <Text style={styles.menuLabel}>
                                            {item.label}
                                        </Text>
                                    </View>
                                    <ChevronRight
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton}>
                    <LogOut size={20} color="#FF3B30" />
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>

                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>Version 1.0.0</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
