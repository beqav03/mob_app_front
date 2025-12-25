import Button from '@/src/components/ui/Button/Button';
import { Input } from '@/src/components/ui/Input/Input';
import { COLORS } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './ChangePhone.styles';

const ChangePhoneScreen = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');

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
                <Text style={styles.headerTitle}>Change Phone Number</Text>
            </View>

            <View style={styles.content}>
                <Input
                    label="New Phone Number"
                    placeholder="+1 234 567 8900"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />

                <View style={styles.spacer} />

                <Button
                    title="Update Phone Number"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    );
};

export default ChangePhoneScreen;
