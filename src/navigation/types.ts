export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
    Restaurant: { restaurantId: string };
    Booking: { restaurantId: string };
    TableSelection: {
        restaurantId: string;
        guests: number;
        date: string;
        time: string;
    };
    MenuSelection: {
        restaurantId: string;
        tableId: string;
        guests: number;
        date: string;
        time: string;
    };
    Checkout: {
        restaurantId: string;
        tableId: string;
        items: any[];
        total: number;
        date: string;
        time: string;
        guests: number;
    };
    Success: undefined;

    // Profile screens
    EditProfile: undefined;
    PaymentMethods: undefined;
    MyBookings: undefined;
    Settings: undefined;
    Support: undefined;
};
