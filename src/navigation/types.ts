export type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    OtpVerification: {
        email?: string;
        phone?: string;
        type: 'forgot_password' | 'verify_contact';
    };
    CreateNewPassword: { email: string };
};

export type TabParamList = {
    Home: undefined;
    Search: undefined;
    Saved: undefined;
    MyBookings: undefined;
    Profile: undefined;
};

export type MainStackParamList = {
    Tabs: { screen: keyof TabParamList };
    Restaurant: { restaurantId: string };
    TableSelection: { restaurantId: string };
    MenuSelection: { restaurantId: string; tableId: string };
    Booking: { restaurantId: string; tableId?: string };
    Checkout: { bookingId: string };
    Success: { type: 'booking' | 'payment' };
    EditProfile: undefined;
    Settings: undefined;
    Security: undefined;
    ChangePassword: undefined;
    ChangeEmail: undefined;
    ChangePhone: undefined;
    DeleteAccount: undefined;
    PaymentMethods: undefined;
    Support: undefined;
    VerifyContact: { type: 'email' | 'phone' };
    Notifications: undefined;
    Map: undefined;
};

export type RootStackParamList = AuthStackParamList & MainStackParamList;
