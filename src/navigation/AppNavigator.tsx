import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './AuthNavigator';
import { TabNavigator } from './TabNavigator';
// Restaurant & Booking
import { RestaurantScreen } from '../app/restaurant/Restaurant/Restaurant';
import { Booking } from '../app/restaurant/Booking/Booking';
import { TableSelection } from '../app/restaurant/TableSelection/TableSelection';
import { MenuSelection } from '../app/restaurant/MenuSelection/MenuSelection';
import { Checkout } from '../app/restaurant/Checkout/Checkout';
import { Success } from '../app/restaurant/Success/Success';
// Main
import { Search } from '../app/main/Search/Search';
// Profile
import { EditProfile } from '../app/profile/EditProfile/EditProfile';
import { PaymentMethods } from '../app/profile/PaymentMethods/PaymentMethods';
import { MyBookings } from '../app/profile/MyBookings/MyBookings';
import { Settings } from '../app/profile/Settings/Settings';
import { Support } from '../app/profile/Support/Support';
import { OtpVerification } from '../app/profile/OtpVerification/OtpVerification';
import { ForgotPassword } from '../app/profile/ForgotPassword/ForgotPassword';
// Security
import { Security } from '../app/profile/Security/Security';
import { ChangePassword } from '../app/profile/Security/ChangePassword/ChangePassword';
import { DeleteAccount } from '../app/profile/Security/DeleteAccount/DeleteAccount';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Auth"
            >
                <Stack.Screen name="Auth" component={AuthNavigator} />
                <Stack.Screen name="Main" component={TabNavigator} />

                {/* Main Features */}
                <Stack.Screen name="Search" component={Search} />

                {/* Restaurant & Booking Flow */}
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Booking" component={Booking} />
                <Stack.Screen
                    name="TableSelection"
                    component={TableSelection}
                />
                <Stack.Screen name="MenuSelection" component={MenuSelection} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="Success" component={Success} />

                {/* Profile Sub-screens */}
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen
                    name="PaymentMethods"
                    component={PaymentMethods}
                />
                <Stack.Screen name="MyBookings" component={MyBookings} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Support" component={Support} />
                <Stack.Screen
                    name="OtpVerification"
                    component={OtpVerification}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                {/* Security Suite */}
                <Stack.Screen name="Security" component={Security} />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                />
                <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
