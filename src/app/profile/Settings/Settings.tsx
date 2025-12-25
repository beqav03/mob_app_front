import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Switch,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Settings.styles';
import { COLORS } from '@/src/constants/colors';

export const Settings = () => {
    const navigation = useNavigation();
    const [pushEnabled, setPushEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Preferences</Text>

                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Push Notifications</Text>
                    <Switch
                        value={pushEnabled}
                        onValueChange={setPushEnabled}
                        trackColor={{
                            false: COLORS.gray,
                            true: COLORS.primary,
                        }}
                    />
                </View>

                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Email Updates</Text>
                    <Switch
                        value={emailEnabled}
                        onValueChange={setEmailEnabled}
                        trackColor={{
                            false: COLORS.gray,
                            true: COLORS.primary,
                        }}
                    />
                </View>

                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Dark Mode</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                        trackColor={{
                            false: COLORS.gray,
                            true: COLORS.primary,
                        }}
                    />
                </View>

                <Text style={styles.sectionTitle}>Account</Text>

                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Change Password</Text>
                    <Text style={{ color: COLORS.gray }}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Privacy Policy</Text>
                    <Text style={{ color: COLORS.gray }}>›</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
