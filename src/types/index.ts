export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    password?: string; // In a real app, never store plain text passwords
}

export interface Restaurant {
    id: string;
    name: string;
    rating: number;
    reviews: number;
    image: string;
    distance: string; // e.g., "1.2 km"
    deliveryTime: string; // e.g., "20-30 min"
    minOrder: number;
    deliveryFee: number;
    tags: string[];
    latitude: number;
    longitude: number;
    description?: string;
    address?: string;
}

export interface Category {
    id: string;
    name: string;
    image: string;
}

export interface MenuItem {
    id: string;
    restaurantId: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    popular?: boolean;
}

export interface CartItem extends MenuItem {
    quantity: number;
    options?: string[];
}

export interface Booking {
    id: string;
    userId: string;
    restaurantId: string;
    date: string; // ISO date string
    time: string;
    guests: number;
    status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
    tableId?: string;
    specialRequests?: string;
}

export interface Table {
    id: string;
    restaurantId: string;
    number: number;
    capacity: number;
    isOccupied: boolean;
    position: { x: number; y: number }; // For visual layout
    shape: 'round' | 'rect';
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    isTyping?: boolean;
    isError?: boolean;}
