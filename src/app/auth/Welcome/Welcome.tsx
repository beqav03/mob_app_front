import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './Welcome.styles';
import { RootStackParamList } from '@/src/navigation/types';

type WelcomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Auth'
>;

export const Welcome = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    const handleGetStarted = () => {
        // Navigate to Login screen which is inside the Auth navigator
        // We assume the parent navigator handles the stack, but for now we navigate to 'Login'
        // Note: In a nested navigator structure, you might need navigation.navigate('Auth', { screen: 'Login' });
        // For this port, we will assume strict mapping.
        navigation.navigate('Login' as any);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={styles.container.backgroundColor}
            />
            <View style={styles.contentContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>F</Text>
                </View>

                <Text style={styles.title}>Food for Everyone</Text>
                <Text style={styles.subtitle}>
                    Find the best restaurants, book tables, and order delicious
                    food easily.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGetStarted}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
