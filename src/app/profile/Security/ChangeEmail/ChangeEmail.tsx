import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    TextInput,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Mail, AlertCircle } from 'lucide-react-native';
import { COLORS } from '../../../../constants/colors';
import styles from './ChangeEmail.styles';

const ChangeEmail = () => {
    const navigation = useNavigation();

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
                <Text style={styles.headerTitle}>Change Email</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.infoBanner}>
                    <AlertCircle size={20} color={COLORS.primary} />
                    <Text style={styles.infoText}>
                        We'll send a verification code to your new email address
                        to confirm the change.
                    </Text>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Current Email</Text>
                    <View style={[styles.inputContainer, styles.disabledInput]}>
                        <Mail
                            size={20}
                            color={COLORS.gray}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.input}
                            value="jessica.t@example.com"
                            editable={false}
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>New Email Address</Text>
                    <View style={styles.inputContainer}>
                        <Mail
                            size={20}
                            color={COLORS.gray}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter new email address"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.submitButtonText}>
                        Send Verification Code
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChangeEmail;
