import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './CreateNewPassword.styles';
import { COLORS } from '@/src/constants/colors';
import { Input } from '@/src/components/ui/Input/Input';
import Button from '@/src/components/ui/Button/Button';

const CreateNewPasswordScreen = () => {
    const navigation = useNavigation<any>();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        // Logic to reset password
        // Navigate back to login
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Ionicons
                        name="chevron-back"
                        size={24}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Create New Password</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.description}>
                    Your new password must be different from previously used
                    passwords.
                </Text>

                <Input
                    label="New Password"
                    placeholder="••••••••"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Input
                    label="Confirm Password"
                    placeholder="••••••••"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <View style={styles.spacer} />

                <Button title="Reset Password" onPress={handleSubmit} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateNewPasswordScreen;
