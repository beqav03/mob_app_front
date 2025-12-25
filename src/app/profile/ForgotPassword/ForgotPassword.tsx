import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ForgotPassword.styles';
import { isValidEmail } from '@/src/utils/helpers';
import { COLORS } from '@/src/constants/colors';

export const ForgotPassword = () => {
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');

    const handleSendCode = () => {
        if (!email) {
            Alert.alert('Error', 'Please enter your email address');
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        // Simulate API call
        Alert.alert(
            'Success',
            'If an account exists with this email, you will receive a verification code.',
            [
                {
                    text: 'OK',
                    onPress: () =>
                        navigation.navigate('OtpVerification' as any),
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
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.subtitle}>
                    Please enter your email address. You will receive a link to
                    create a new password via email.
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor={COLORS.gray}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSendCode}
                >
                    <Text style={styles.buttonText}>Send Code</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
