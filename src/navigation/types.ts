import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Booking } from '../types';

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    MainTabs: undefined;
    Restaurant: { restaurantId: string };
    Booking: { restaurantId: string };
    TableSelection: { restaurantId: string; bookingDetails: Partial<Booking> };
    MenuSelection: { restaurantId: string; bookingDetails: Partial<Booking> };
    Checkout: { restaurantId: string; bookingDetails: Booking };
    Success: { bookingId: string };
    // Profile & Settings screens are often in the root stack for easy access
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
