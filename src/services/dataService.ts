import { Restaurant, User, Booking, Notification } from '../types';

export const mockUser: User = {
    id: 'u1',
    name: 'Jessica Thompson',
    email: 'jessica.t@example.com',
    phone: '+1 234 567 890',
    avatar: require('../../assets/mobapp_images/img/Jessica T.-User Profile.jpg'),
};

export const mockRestaurants: Restaurant[] = [
    {
        id: 'r1',
        name: 'Guliani',
        description:
            'Authentic Georgian cuisine with a modern twist. Famous for Khachapuri and local wines.',
        address: '15 Rustaveli Ave, Tbilisi',
        rating: 4.8,
        reviewsCount: 124,
        cuisine: 'Georgian',
        image: require('../../assets/mobapp_images/img/Guliani-Welcome Screen.jpg'),
        tables: [
            {
                id: 't1',
                number: '1',
                capacity: 2,
                isAvailable: true,
                position: { x: 50, y: 50 },
            },
            {
                id: 't2',
                number: '2',
                capacity: 4,
                isAvailable: false,
                position: { x: 150, y: 50 },
            },
            {
                id: 't3',
                number: '3',
                capacity: 2,
                isAvailable: true,
                position: { x: 50, y: 150 },
            },
            {
                id: 't4',
                number: '4',
                capacity: 6,
                isAvailable: true,
                position: { x: 150, y: 150 },
            },
        ],
        menu: [
            {
                id: 'm1',
                name: 'Dumplings (Khinkali)',
                description: 'Traditional spiced meat dumplings.',
                price: 12.0,
                category: 'Main',
                image: require('../../assets/mobapp_images/img/Dumplings.jpg'),
            },
            {
                id: 'm2',
                name: 'Tiramisu',
                description: 'Classic Italian coffee-flavored dessert.',
                price: 8.5,
                category: 'Dessert',
                image: require('../../assets/mobapp_images/img/Tiramisu.jpg'),
            },
        ],
    },
    {
        id: 'r2',
        name: 'Stamba',
        description:
            'Located in a former publishing house, offering industrial chic vibes and international menu.',
        address: '14 Kostava St, Tbilisi',
        rating: 4.9,
        reviewsCount: 256,
        cuisine: 'International',
        image: require('../../assets/mobapp_images/img/Stamba-Featured Card.jpg'),
        tables: [
            {
                id: 'st1',
                number: '10',
                capacity: 2,
                isAvailable: true,
                position: { x: 20, y: 20 },
            },
            {
                id: 'st2',
                number: '11',
                capacity: 4,
                isAvailable: true,
                position: { x: 100, y: 20 },
            },
        ],
        menu: [
            {
                id: 'm3',
                name: 'Miso Glazed Salmon',
                description:
                    'Fresh salmon with miso glaze and seasonal greens.',
                price: 24.0,
                category: 'Main',
                image: require('../../assets/mobapp_images/img/Miso Glazed Salmon.jpg'),
            },
        ],
    },
];

export const mockBookings: Booking[] = [
    {
        id: 'b1',
        restaurantId: 'r1',
        userId: 'u1',
        tableId: 't2',
        date: '2024-05-20',
        time: '19:30',
        guestsCount: 4,
        status: 'confirmed',
        preOrderItems: [{ itemId: 'm1', quantity: 2 }],
        totalPrice: 24.0,
    },
];

export const mockNotifications: Notification[] = [
    {
        id: 'n1',
        userId: 'u1',
        title: 'Booking Confirmed',
        message: 'Your table at Guliani for 4 people has been confirmed.',
        type: 'booking',
        createdAt: '2024-05-18T10:00:00Z',
        isRead: false,
    },
];
