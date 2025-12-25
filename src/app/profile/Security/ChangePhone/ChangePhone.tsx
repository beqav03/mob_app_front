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
import { ChevronLeft, Phone, ShieldCheck } from 'lucide-react-native';
import { COLORS } from '../../../../constants/colors';
import styles from './ChangePhone.styles';

const ChangePhone = () => {
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
                <Text style={styles.headerTitle}>Change Phone</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.illustrationContainer}>
                    <View style={styles.circle}>
                        <Phone size={40} color={COLORS.primary} />
                    </View>
                </View>

                <Text style={styles.title}>Update Phone Number</Text>
                <Text style={styles.description}>
                    Keeping your phone number up to date helps us secure your
                    account and send important booking notifications.
                </Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>New Phone Number</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.countryCode}>+1</Text>
                        <View style={styles.divider} />
                        <TextInput
                            style={styles.input}
                            placeholder="000 000 0000"
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.submitButtonText}>Send OTP</Text>
                </TouchableOpacity>

                <View style={styles.secureBadge}>
                    <ShieldCheck size={14} color={COLORS.gray} />
                    <Text style={styles.secureText}>
                        Standard messaging rates may apply
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChangePhone;
