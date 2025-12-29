export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: any;
}

export interface Table {
    id: string;
    number: string;
    capacity: number;
    isAvailable: boolean;
    position: { x: number; y: number };
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: any;
}

export interface Restaurant {
    id: string;
    name: string;
    description: string;
    address: string;
    rating: number;
    reviewsCount: number;
    image: any;
    cuisine: string;
    tables: Table[];
    menu: MenuItem[];
}

export interface Booking {
    id: string;
    restaurantId: string;
    userId: string;
    tableId: string;
    date: string;
    time: string;
    guestsCount: number;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    preOrderItems?: { itemId: string; quantity: number }[];
    totalPrice?: number;
}

export interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: 'booking' | 'system' | 'promotion';
    createdAt: string;
    isRead: boolean;
}
