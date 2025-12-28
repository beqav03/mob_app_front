import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Login.styles';
import { isValidEmail } from '../../../utils/helpers';
import { COLORS } from '../../../constants/colors';
import { BASE_URL } from '../../../constants/config';

export const Login = () => {
    const navigation = useNavigation<any>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const isFormValid = email.trim().length > 0 && password.trim().length > 0;

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        // Simulate API Call
        try {
            // Real API Call
            /*
            const response = await fetch(`${BASE_URL}/api/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });
            

            const data = await response.json();
            */
           const data = { response: { ok: true } }; // Mock response
            if (data.response.ok) {
                setIsLoading(false);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Main' }],
                });
            } else {
                setIsLoading(false);
                Alert.alert('Error', 'Invalid credentials');
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Login Error:', error);
            Alert.alert('Connection Error', 'Could not connect to the server.');
        }
    };

    const navigateToRegister = () => {
        navigation.navigate('Register');
    };

    const navigateToForgotPassword = () => {
        // Assuming you have this screen, otherwise we can stub it
        navigation.navigate('ForgotPassword' as any);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={COLORS.background}
            />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subtitle}>
                        Please sign in to continue.
                    </Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor={COLORS.gray}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor={COLORS.gray}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.forgotPasswordContainer}
                        onPress={navigateToForgotPassword}
                    >
                        <Text style={styles.forgotPasswordText}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            (!isFormValid || isLoading) && {
                                opacity: 0.5,
                            },
                        ]}
                        onPress={handleLogin}
                        disabled={!isFormValid || isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator color={COLORS.white} />
                        ) : (
                            <Text style={styles.buttonText}>Login</Text>
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={navigateToRegister}>
                        <Text style={styles.linkText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
