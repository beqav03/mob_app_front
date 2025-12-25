import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './VerifyContact.styles';
import { COLORS } from '@/src/constants/colors';
import { Input } from '@/src/components/ui/Input/Input';
import Button from '@/src/components/ui/Button/Button';

const VerifyContactScreen = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState('');

    const handleVerify = () => {
        // API verification logic here
        navigation.goBack();
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
                <Text style={styles.headerTitle}>Verify Contact</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.description}>
                    We have sent a 6-digit verification code to your new contact
                    method. Please enter it below.
                </Text>

                <Input
                    label="Verification Code"
                    placeholder="123456"
                    keyboardType="number-pad"
                    value={code}
                    onChangeText={setCode}
                    maxLength={6}
                />

                <View style={styles.spacer} />

                <Button title="Verify & Update" onPress={handleVerify} />
            </View>
        </SafeAreaView>
    );
};

export default VerifyContactScreen;
