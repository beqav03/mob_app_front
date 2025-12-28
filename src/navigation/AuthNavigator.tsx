import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './types';

// Screens
import Welcome from '../app/auth/Welcome/Welcome';
import { Login } from '../app/auth/Login/Login';
import {Register } from '../app/auth/Register/Register';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#fff' }, // Ensure white background
            }}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
