import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './DeleteAccount.styles';
import { COLORS } from '@/src/constants/colors';

export const DeleteAccount = () => {
    const navigation = useNavigation<any>();

    const handleDelete = () => {
        Alert.alert(
            'Delete Account',
            'Are you sure? This action cannot be undone.',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        // Simulate API call
                        Alert.alert(
                            'Account Deleted',
                            'Your account has been removed.',
                            [
                                {
                                    text: 'OK',
                                    onPress: () =>
                                        navigation.reset({
                                            index: 0,
                                            routes: [{ name: 'Auth' }],
                                        }),
                                },
                            ],
                        );
                    },
                },
            ],
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.warningIcon}>⚠️</Text>
                <Text style={styles.title}>Delete Account</Text>
                <Text style={styles.description}>
                    Are you sure you want to delete your account? All your data,
                    bookings, and preferences will be permanently lost.
                </Text>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDelete}
                >
                    <Text style={styles.deleteButtonText}>
                        Delete My Account
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
