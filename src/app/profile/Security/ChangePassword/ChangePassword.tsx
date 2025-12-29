import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Lock, Eye, EyeOff } from 'lucide-react-native';
import { COLORS } from '../../../../constants/colors';
import styles from './ChangePassword.styles';

const ChangePassword = () => {
    const navigation = useNavigation();
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

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
                <Text style={styles.headerTitle}>Change Password</Text>
                <View style={{ width: 28 }} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.form}>
                        <Text style={styles.instruction}>
                            Your new password must be at least 8 characters long
                            and include a mix of letters, numbers, and symbols.
                        </Text>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Current Password</Text>
                            <View style={styles.inputContainer}>
                                <Lock
                                    size={20}
                                    color={COLORS.gray}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter current password"
                                    secureTextEntry={!showCurrent}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowCurrent(!showCurrent)}
                                >
                                    {showCurrent ? (
                                        <EyeOff size={20} color={COLORS.gray} />
                                    ) : (
                                        <Eye size={20} color={COLORS.gray} />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>New Password</Text>
                            <View style={styles.inputContainer}>
                                <Lock
                                    size={20}
                                    color={COLORS.gray}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter new password"
                                    secureTextEntry={!showNew}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowNew(!showNew)}
                                >
                                    {showNew ? (
                                        <EyeOff size={20} color={COLORS.gray} />
                                    ) : (
                                        <Eye size={20} color={COLORS.gray} />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>
                                Confirm New Password
                            </Text>
                            <View style={styles.inputContainer}>
                                <Lock
                                    size={20}
                                    color={COLORS.gray}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Repeat new password"
                                    secureTextEntry={!showConfirm}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowConfirm(!showConfirm)}
                                >
                                    {showConfirm ? (
                                        <EyeOff size={20} color={COLORS.gray} />
                                    ) : (
                                        <Eye size={20} color={COLORS.gray} />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.submitButtonText}>
                            Update Password
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChangePassword;
