import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Security.styles';
import { COLORS } from '@/src/constants/colors';

export const Security = () => {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Security</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('ChangePassword')}
                >
                    <Text style={styles.menuText}>Change Password</Text>
                    <Text style={{ color: COLORS.gray }}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('DeleteAccount')}
                >
                    <Text style={[styles.menuText, { color: COLORS.error }]}>
                        Delete Account
                    </Text>
                    <Text style={{ color: COLORS.gray }}>›</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
