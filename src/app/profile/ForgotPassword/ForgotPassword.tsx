import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    ArrowRight,
    ChevronLeft,
    LockKeyhole,
    Mail,
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../../../constants/colors';
import { AuthStackParamList } from '../../../navigation/types';
import styles from './ForgotPassword.styles';

const ForgotPassword = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const [email, setEmail] = useState('');

    const handleSendCode = () => {
        if (email.trim()) {
            navigation.navigate('OtpVerification', {
                email: email.trim(),
                type: 'forgot_password',
            });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <ChevronLeft size={28} color={COLORS.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Forgot Password</Text>
                <View style={{ width: 28 }} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Illustration Section */}
                    <View style={styles.illustrationContainer}>
                        <View style={styles.iconCircle}>
                            <LockKeyhole size={50} color={COLORS.primary} />
                        </View>
                    </View>

                    <View style={styles.textSection}>
                        <Text style={styles.title}>Recover your password</Text>
                        <Text style={styles.subtitle}>
                            Don't worry! It happens. Please enter the email
                            address associated with your account.
                        </Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email Address</Text>
                            <View style={styles.inputContainer}>
                                <Mail
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="example@mail.com"
                                    placeholderTextColor={COLORS.gray}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            style={[
                                styles.submitButton,
                                !email.trim() && styles.disabledButton,
                            ]}
                            onPress={handleSendCode}
                            disabled={!email.trim()}
                        >
                            <Text style={styles.submitButtonText}>
                                Send Reset Code
                            </Text>
                            <ArrowRight size={20} color={COLORS.white} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Remember your password? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;
