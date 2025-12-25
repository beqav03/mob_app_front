import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Utensils } from 'lucide-react-native';
import { RootStackParamList } from '../../../navigation/types';
import styles from './Welcome.styles';
import { COLORS } from '../../../constants/colors';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Welcome'
>;

export const Welcome = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    const handleGetStarted = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />

            <ImageBackground
                source={require('../../../../assets/mobapp_images/img/Guliani-Welcome Screen.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.overlay} />

                <SafeAreaView style={styles.contentContainer}>
                    <View style={styles.topSection}>
                        <View style={styles.logoContainer}>
                            <Utensils size={32} color={COLORS.white} />
                        </View>
                        <Text style={styles.brandName}>TableReserve</Text>
                    </View>

                    <View style={styles.bottomSection}>
                        <Text style={styles.title}>
                            Dining Experience, Refined.
                        </Text>
                        <Text style={styles.subtitle}>
                            Discover exceptional restaurants and secure your
                            favorite table in seconds. Pre-order your meals for
                            a seamless evening.
                        </Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleGetStarted}
                            activeOpacity={0.9}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>

                        <View style={styles.footerRow}>
                            <Text style={styles.footerText}>
                                Already have an account?{' '}
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={styles.loginLink}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Welcome;
