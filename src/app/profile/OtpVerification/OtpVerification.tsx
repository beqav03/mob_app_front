import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    ChevronLeft,
    ShieldCheck,
    Timer,
    RefreshCcw,
} from 'lucide-react-native';
import { AuthStackParamList } from '../../../navigation/types';
import { COLORS } from '../../../constants/colors';
import styles from './OtpVerification.styles';

type OtpRouteProp = RouteProp<AuthStackParamList, 'OtpVerification'>;

const OtpVerification = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const route = useRoute<OtpRouteProp>();
    const { email, phone, type } = route.params;

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(30);
    const inputs = useRef<Array<TextInput | null>>([]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to next input if text is entered
        if (text && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        // Move to previous input on backspace
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const code = otp.join('');
        if (code.length === 6) {
            if (type === 'forgot_password' && email) {
                navigation.navigate('CreateNewPassword', { email });
            } else {
                navigation.goBack();
            }
        }
    };

    const handleResend = () => {
        if (timer === 0) {
            setTimer(30);
            setOtp(['', '', '', '', '', '']);
            inputs.current[0]?.focus();
        }
    };

    const contactInfo = email || phone || 'your device';

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
                <Text style={styles.headerTitle}>Verification</Text>
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
                    <View style={styles.iconContainer}>
                        <View style={styles.iconCircle}>
                            <ShieldCheck size={48} color={COLORS.primary} />
                        </View>
                    </View>

                    <Text style={styles.title}>Enter OTP Code</Text>
                    <Text style={styles.subtitle}>
                        We've sent a 6-digit verification code to {'\n'}
                        <Text style={styles.contactText}>{contactInfo}</Text>
                    </Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.inputWrapper,
                                    otp[index]
                                        ? styles.inputWrapperActive
                                        : null,
                                ]}
                            >
                                <TextInput
                                    ref={(ref) => {
                                        inputs.current[index] = ref;
                                    }}
                                    style={styles.otpInput}
                                    value={digit}
                                    onChangeText={(text) =>
                                        handleChange(text, index)
                                    }
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    selectTextOnFocus
                                />
                            </View>
                        ))}
                    </View>

                    <View style={styles.resendContainer}>
                        {timer > 0 ? (
                            <View style={styles.timerRow}>
                                <Timer size={16} color={COLORS.gray} />
                                <Text style={styles.timerText}>
                                    {' '}
                                    Resend code in {timer}s
                                </Text>
                            </View>
                        ) : (
                            <TouchableOpacity
                                onPress={handleResend}
                                style={styles.resendButton}
                            >
                                <RefreshCcw size={16} color={COLORS.primary} />
                                <Text style={styles.resendText}>
                                    {' '}
                                    Resend Code
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.verifyButton,
                            otp.join('').length < 6 && styles.disabledButton,
                        ]}
                        onPress={handleVerify}
                        disabled={otp.join('').length < 6}
                    >
                        <Text style={styles.verifyButtonText}>Verify Now</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default OtpVerification;
