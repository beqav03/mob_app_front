import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Calendar, CheckCircle } from 'lucide-react-native';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../constants/colors';
import { RootStackParamList } from '../../../navigation/types';
import styles from './Success.styles';

const Success = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.content}>
                <View style={styles.iconWrapper}>
                    <CheckCircle size={80} color={COLORS.primary} />
                </View>

                <Text style={styles.title}>Booking Confirmed!</Text>
                <Text style={styles.subtitle}>
                    Your table reservation has been successfully placed. We've
                    sent the details to your email.
                </Text>

                <View style={styles.summaryBox}>
                    <View style={styles.summaryItem}>
                        <Calendar size={20} color={COLORS.gray} />
                        <View>
                            <Text style={styles.summaryLabel}>
                                Reservation Date
                            </Text>
                            <Text style={styles.summaryValue}>
                                Friday, May 25 • 19:30 PM
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.mainButton}
                    onPress={() => navigation.navigate('MyBookings')}
                >
                    <Text style={styles.mainButtonText}>View My Bookings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() =>
                        navigation.navigate('MainTabs', { screen: 'Home' })
                    }
                >
                    <Text style={styles.secondaryButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Success;
