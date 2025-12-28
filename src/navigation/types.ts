export type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
};

export type TabParamList = {
    Home: undefined;
    Map: undefined;
    Saved: undefined;
    Profile: undefined;
};

export type RootStackParamList = {
    Auth: undefined;
    MainTabs: undefined;
    Restaurant: { restaurantId: string }; // Example param
    MenuSelection: undefined;
    Booking: undefined;
    TableSelection: undefined;
    Checkout: undefined;
    Success: undefined;
    EditProfile: undefined;
    Settings: undefined;
    Support: undefined;
};
