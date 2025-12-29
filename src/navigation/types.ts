import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Booking } from '../types';

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    MainTabs: NavigatorScreenParams<TabParamList>;
    Restaurant: { restaurantId: string };
    TableSelection: { restaurantId: string };
    MenuSelection: { restaurantId: string; tableId: string };
    Booking: { restaurantId: string; tableId: string };
    Checkout: { restaurantId: string; bookingId: string };
    Success: { bookingId: string };
    // ... rest of your screens
    EditProfile: undefined;
    Settings: undefined;
    Support: undefined;
    MyBookings: undefined;
    Security: undefined;
    ChangeEmail: undefined;
    ChangePassword: undefined;
    ChangePhone: undefined;
    DeleteAccount: undefined;
    VerifyContact: { type: 'email' | 'phone'; value: string };
    Profile: undefined;
};

export type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    OtpVerification: { email: string; flow: 'register' | 'forgot_password' };
    CreateNewPassword: { email: string; otp: string };
};

export type MainStackParamList = {
    Tabs: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
    Home: undefined;
    Search: undefined;
    Map: undefined;
    Saved: undefined;
    Notifications: undefined;
    Profile: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
