import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../app/auth/Welcome/Welcome';
import { Login } from '../app/auth/Login/Login';
import { Register } from '../app/auth/Register/Register';
import { ForgotPassword } from '../app/profile/ForgotPassword/ForgotPassword';
import { OtpVerification } from '../app/profile/OtpVerification/OtpVerification';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'white' },
            }}
            initialRouteName="Welcome"
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
        </Stack.Navigator>
    );
};
