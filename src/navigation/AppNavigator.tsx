import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { RootStackParamList } from './types';

// Navigators
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

// Standalone Screens (Import your actual components here)
import Booking from '../app/restaurant/Booking/Booking';
import Checkout from '../app/restaurant/Checkout/Checkout';
import MenuSelection from '../app/restaurant/MenuSelection/MenuSelection';
import Restaurant from '../app/restaurant/Restaurant/Restaurant';
import Success from '../app/restaurant/Success/Success';
import TableSelection from '../app/restaurant/TableSelection/TableSelection';
// Profile Screens
import EditProfile from '../app/profile/EditProfile/EditProfile';
import Settings from '../app/profile/Settings/Settings';
import Support from '../app/profile/Support/Support';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    // TODO: Replace this with your actual auth state management (Context, Redux, or Firebase listener)
    // For now, change 'true' to 'false' to test the Login flow.
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                // === AUTHENTICATED USER FLOW ===
                // We use a Group to organize authenticated routes
                <Stack.Group>
                    {/* Main Tabs is the entry point */}
                    <Stack.Screen name="MainTabs" component={TabNavigator} />

                    {/* Full Screen Modals / Detail Views */}
                    {/* These overlay the tabs when navigated to */}
                    <Stack.Screen name="Restaurant" component={Restaurant} />
                    <Stack.Screen
                        name="MenuSelection"
                        component={MenuSelection}
                    />
                    <Stack.Screen
                        name="TableSelection"
                        component={TableSelection}
                    />
                    <Stack.Screen name="Booking" component={Booking} />
                    <Stack.Screen name="Checkout" component={Checkout} />
                    <Stack.Screen name="Success" component={Success} />

                    {/* Profile Details */}
                    <Stack.Screen name="EditProfile" component={EditProfile} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="Support" component={Support} />
                </Stack.Group>
            ) : (
                // === GUEST / LOGGED OUT FLOW ===
                <Stack.Screen name="Auth" component={AuthNavigator} />
            )}
        </Stack.Navigator>
    );
};

export default AppNavigator;
