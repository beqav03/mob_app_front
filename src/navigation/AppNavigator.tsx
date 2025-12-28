import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStackParamList } from './types';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

// App Screens
import RestaurantScreen from '../app/restaurant/Restaurant/Restaurant';
import BookingScreen from '../app/restaurant/Booking/Booking';
import TableSelectionScreen from '../app/restaurant/TableSelection/TableSelection';
import MenuSelectionScreen from '../app/restaurant/MenuSelection/MenuSelection';
import CheckoutScreen from '../app/restaurant/Checkout/Checkout';
import SuccessScreen from '../app/restaurant/Success/Success';

// Profile Screens
import EditProfileScreen from '../app/profile/EditProfile/EditProfile';
import SettingsScreen from '../app/profile/Settings/Settings';
import SupportScreen from '../app/profile/Support/Support';
import MyBookingsScreen from '../app/profile/MyBookings/MyBookings';
import SecurityScreen from '../app/profile/Security/Security';
import ChangeEmailScreen from '../app/profile/Security/ChangeEmail/ChangeEmail';
import ChangePasswordScreen from '../app/profile/Security/ChangePassword/ChangePassword';
import ChangePhoneScreen from '../app/profile/Security/ChangePhone/ChangePhone';
import DeleteAccountScreen from '../app/profile/Security/DeleteAccount/DeleteAccount';
import VerifyContactScreen from '../app/profile/VerifyContact/VerifyContact';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    // Simulating auth state - in real app use a hook/context
    const isAuthenticated = true;

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {!isAuthenticated ? (
                        <Stack.Screen name="Auth" component={AuthNavigator} />
                    ) : (
                        <>
                            <Stack.Screen
                                name="MainTabs"
                                component={TabNavigator}
                            />

                            {/* Restaurant Flow */}
                            <Stack.Screen
                                name="Restaurant"
                                component={RestaurantScreen}
                            />
                            <Stack.Screen
                                name="Booking"
                                component={BookingScreen}
                            />
                            <Stack.Screen
                                name="TableSelection"
                                component={TableSelectionScreen}
                            />
                            <Stack.Screen
                                name="MenuSelection"
                                component={MenuSelectionScreen}
                            />
                            <Stack.Screen
                                name="Checkout"
                                component={CheckoutScreen}
                            />
                            <Stack.Screen
                                name="Success"
                                component={SuccessScreen}
                            />

                            {/* Profile & Settings */}
                            <Stack.Screen
                                name="EditProfile"
                                component={EditProfileScreen}
                            />
                            <Stack.Screen
                                name="Settings"
                                component={SettingsScreen}
                            />
                            <Stack.Screen
                                name="Support"
                                component={SupportScreen}
                            />
                            <Stack.Screen
                                name="MyBookings"
                                component={MyBookingsScreen}
                            />
                            <Stack.Screen
                                name="Security"
                                component={SecurityScreen}
                            />
                            <Stack.Screen
                                name="ChangeEmail"
                                component={ChangeEmailScreen}
                            />
                            <Stack.Screen
                                name="ChangePassword"
                                component={ChangePasswordScreen}
                            />
                            <Stack.Screen
                                name="ChangePhone"
                                component={ChangePhoneScreen}
                            />
                            <Stack.Screen
                                name="DeleteAccount"
                                component={DeleteAccountScreen}
                            />
                            <Stack.Screen
                                name="VerifyContact"
                                component={VerifyContactScreen}
                            />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppNavigator;
