import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    ChevronLeft,
    Globe,
    Moon,
    Bell,
    MapPin,
    Eye,
    Info,
    ChevronRight,
} from 'lucide-react-native';
import { COLORS } from '../../../constants/colors';
import styles from './Settings.styles';

const Settings = () => {
    const navigation = useNavigation();

    // State for toggles
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [locationServices, setLocationServices] = useState(true);

    const SettingItem = ({
        icon: Icon,
        label,
        value,
        onValueChange,
        type = 'switch',
        onPress,
        sublabel,
    }: any) => (
        <View style={styles.settingItemContainer}>
            <TouchableOpacity
                style={styles.settingItem}
                onPress={onPress}
                disabled={type === 'switch'}
            >
                <View style={styles.settingLeft}>
                    <View style={styles.iconWrapper}>
                        <Icon size={20} color={COLORS.primary} />
                    </View>
                    <View>
                        <Text style={styles.settingLabel}>{label}</Text>
                        {sublabel && (
                            <Text style={styles.settingSublabel}>
                                {sublabel}
                            </Text>
                        )}
                    </View>
                </View>

                {type === 'switch' ? (
                    <Switch
                        value={value}
                        onValueChange={onValueChange}
                        trackColor={{ false: '#E2E8F0', true: COLORS.primary }}
                        thumbColor={COLORS.white}
                        ios_backgroundColor="#E2E8F0"
                    />
                ) : (
                    <View style={styles.settingRight}>
                        <Text style={styles.settingValue}>{value}</Text>
                        <ChevronRight size={18} color={COLORS.gray} />
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );

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
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Preferences</Text>
                    <View style={styles.menuContainer}>
                        <SettingItem
                            icon={Globe}
                            label="Language"
                            value="English (US)"
                            type="link"
                            onPress={() => {}}
                        />
                        <View style={styles.divider} />
                        <SettingItem
                            icon={Moon}
                            label="Dark Mode"
                            value={isDarkMode}
                            onValueChange={setIsDarkMode}
                            type="switch"
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Notifications</Text>
                    <View style={styles.menuContainer}>
                        <SettingItem
                            icon={Bell}
                            label="Push Notifications"
                            sublabel="Booking updates and alerts"
                            value={pushNotifications}
                            onValueChange={setPushNotifications}
                            type="switch"
                        />
                        <View style={styles.divider} />
                        <SettingItem
                            icon={Bell}
                            label="Email Notifications"
                            sublabel="News and promotional offers"
                            value={emailNotifications}
                            onValueChange={setEmailNotifications}
                            type="switch"
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Permissions</Text>
                    <View style={styles.menuContainer}>
                        <SettingItem
                            icon={MapPin}
                            label="Location Services"
                            sublabel="Find restaurants near you"
                            value={locationServices}
                            onValueChange={setLocationServices}
                            type="switch"
                        />
                        <View style={styles.divider} />
                        <SettingItem
                            icon={Eye}
                            label="Privacy Policy"
                            type="link"
                            onPress={() => {}}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <View style={styles.menuContainer}>
                        <SettingItem
                            icon={Info}
                            label="App Version"
                            value="1.0.0 (Build 124)"
                            type="link"
                            onPress={() => {}}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.restoreButton}>
                    <Text style={styles.restoreText}>
                        Restore Default Settings
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
