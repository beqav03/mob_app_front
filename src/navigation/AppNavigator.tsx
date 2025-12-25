import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from './types';

// Navigator Imports
import TabNavigator from './TabNavigator';

// Screen Imports
import Restaurant from '../app/restaurant/Restaurant/Restaurant';
import TableSelection from '../app/restaurant/TableSelection/TableSelection';
import MenuSelection from '../app/restaurant/MenuSelection/MenuSelection';
import Booking from '../app/restaurant/Booking/Booking';
import Checkout from '../app/restaurant/Checkout/Checkout';
import Success from '../app/restaurant/Success/Success';
import EditProfile from '../app/profile/EditProfile/EditProfile';
import Settings from '../app/profile/Settings/Settings';
import Security from '../app/profile/Security/Security';
import ChangePassword from '../app/profile/Security/ChangePassword/ChangePassword';
import ChangeEmail from '../app/profile/Security/ChangeEmail/ChangeEmail';
import ChangePhone from '../app/profile/Security/ChangePhone/ChangePhone';
import DeleteAccount from '../app/profile/Security/DeleteAccount/DeleteAccount';
import PaymentMethods from '../app/profile/PaymentMethods/PaymentMethods';
import Support from '../app/profile/Support/Support';
import Notifications from '../app/main/Notifications/Notifications';
import Map from '../app/main/Map/Map';

const Stack = createNativeStackNavigator<MainStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            {/* Main Tabs */}
            <Stack.Screen name="Tabs" component={TabNavigator} />

            {/* Restaurant & Booking Flow */}
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen name="TableSelection" component={TableSelection} />
            <Stack.Screen name="MenuSelection" component={MenuSelection} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Success" component={Success} />

            {/* Profile & Settings */}
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
            <Stack.Screen name="ChangePhone" component={ChangePhone} />
            <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
            <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
            <Stack.Screen name="Support" component={Support} />

            {/* Utilities */}
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
