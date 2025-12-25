import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './ChangeEmail.styles';
import { COLORS } from '@/src/constants/colors';
import { Input } from '@/src/components/ui/Input/Input';
import Button from '@/src/components/ui/Button/Button';

const ChangeEmailScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

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
                <Text style={styles.headerTitle}>Change Email</Text>
            </View>

            <View style={styles.content}>
                <Input
                    label="New Email Address"
                    placeholder="new.email@example.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <View style={styles.spacer} />

                <Button
                    title="Update Email"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    );
};

export default ChangeEmailScreen;
