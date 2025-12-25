import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Support.styles';
import { COLORS } from '@/src/constants/colors';

export const Support = () => {
    const navigation = useNavigation();

    const handleCall = () => {
        Linking.openURL('tel:+1234567890');
    };

    const handleEmail = () => {
        Linking.openURL('mailto:support@foodapp.com');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, color: COLORS.text }}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Support</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>How can we help you?</Text>
                <Text style={styles.description}>
                    If you have any issues with your order or the application,
                    please feel free to contact us.
                </Text>

                <TouchableOpacity style={styles.card} onPress={handleCall}>
                    <Text style={styles.icon}>📞</Text>
                    <View>
                        <Text style={styles.cardTitle}>Call Support</Text>
                        <Text style={styles.cardSubtitle}>+1 234 567 890</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={handleEmail}>
                    <Text style={styles.icon}>📧</Text>
                    <View>
                        <Text style={styles.cardTitle}>Email Us</Text>
                        <Text style={styles.cardSubtitle}>
                            support@foodapp.com
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
