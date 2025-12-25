import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Success.styles';

export const Success = () => {
    const navigation = useNavigation<any>();

    const handleHome = () => {
        // Reset navigation stack to Home
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>🎉</Text>
            </View>

            <Text style={styles.title}>Success!</Text>
            <Text style={styles.subtitle}>
                Your table has been booked successfully. We've sent you a
                confirmation email with all the details.
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleHome}>
                <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
