import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    ChevronLeft,
    ChevronRight,
    Lock,
    Mail,
    Phone,
    Trash2,
    ShieldCheck,
} from 'lucide-react-native';
import { RootStackParamList } from '../../../navigation/types';
import { COLORS } from '../../../constants/colors';
import styles from './Security.styles';

const Security = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const securityOptions = [
        {
            id: 'password',
            label: 'Change Password',
            icon: Lock,
            action: () => navigation.navigate('ChangePassword'),
        },
        {
            id: 'email',
            label: 'Change Email',
            icon: Mail,
            action: () => navigation.navigate('ChangeEmail'),
        },
        {
            id: 'phone',
            label: 'Change Phone Number',
            icon: Phone,
            action: () => navigation.navigate('ChangePhone'),
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <ChevronLeft size={28} color={COLORS.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Security</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.securityBanner}>
                    <View style={styles.bannerIconContainer}>
                        <ShieldCheck size={32} color={COLORS.primary} />
                    </View>
                    <Text style={styles.bannerTitle}>Account Security</Text>
                    <Text style={styles.bannerSubtitle}>
                        Manage your credentials and keep your account safe.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Login Credentials</Text>
                    <View style={styles.menuContainer}>
                        {securityOptions.map((option, index) => (
                            <TouchableOpacity
                                key={option.id}
                                style={[
                                    styles.menuItem,
                                    index === securityOptions.length - 1 &&
                                        styles.noBorder,
                                ]}
                                onPress={option.action}
                            >
                                <View style={styles.menuLeft}>
                                    <View style={styles.iconWrapper}>
                                        <option.icon
                                            size={20}
                                            color={COLORS.primary}
                                        />
                                    </View>
                                    <Text style={styles.menuLabel}>
                                        {option.label}
                                    </Text>
                                </View>
                                <ChevronRight size={20} color={COLORS.gray} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Privacy & Data</Text>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity
                            style={[styles.menuItem, styles.noBorder]}
                            onPress={() => navigation.navigate('DeleteAccount')}
                        >
                            <View style={styles.menuLeft}>
                                <View
                                    style={[
                                        styles.iconWrapper,
                                        { backgroundColor: '#FFF5F5' },
                                    ]}
                                >
                                    <Trash2 size={20} color="#FF3B30" />
                                </View>
                                <Text
                                    style={[
                                        styles.menuLabel,
                                        { color: '#FF3B30' },
                                    ]}
                                >
                                    Delete Account
                                </Text>
                            </View>
                            <ChevronRight size={20} color={COLORS.gray} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.footerNote}>
                        Deleting your account is permanent and will remove all
                        your data, including booking history and saved places.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Security;
