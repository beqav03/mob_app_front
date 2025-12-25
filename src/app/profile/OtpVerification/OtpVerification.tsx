import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './OtpVerification.styles';
import { COLORS } from '@/src/constants/colors';

export const OtpVerification = () => {
    const navigation = useNavigation<any>();
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef<Array<TextInput | null>>([]);
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputs.current[index + 1]?.focus();
        }

        if (newOtp.every((digit) => digit !== '')) {
            Keyboard.dismiss();
        }
    };

    const handleBackspace = (text: string, index: number) => {
        if (!text && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const code = otp.join('');
        if (code.length < 4) {
            Alert.alert('Error', 'Please enter the complete 4-digit code.');
            return;
        }

        // Simulate verification
        Alert.alert('Success', 'Phone number verified successfully!', [
            { text: 'OK', onPress: () => navigation.navigate('Main') },
        ]);
    };

    const handleResend = () => {
        setTimer(60);
        Alert.alert('Info', 'Code resent!');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Verification Code</Text>
                <Text style={styles.subtitle}>
                    Please enter the code we just sent to your phone number.
                </Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => {
                                inputs.current[index] = ref;
                            }}
                            style={[
                                styles.otpInput,
                                digit ? styles.otpInputActive : null,
                            ]}
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === 'Backspace') {
                                    handleBackspace(digit, index);
                                }
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            selectTextOnFocus
                        />
                    ))}
                </View>

                <Text style={styles.timerText}>
                    {timer > 0
                        ? `Resend code in 00:${
                              timer < 10 ? `0${timer}` : timer
                          }`
                        : "Didn't receive code?"}
                </Text>

                {timer === 0 && (
                    <TouchableOpacity onPress={handleResend}>
                        <Text style={styles.resendText}>Resend Code</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity style={styles.button} onPress={handleVerify}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
