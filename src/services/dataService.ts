import { MOCK_DELAY } from '../constants/config';
import { Category, MenuItem, Restaurant } from '../types';

// Mock Data
const CATEGORIES: Category[] = [
    {
        id: '1',
        name: 'Burger',
        image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    },
    {
        id: '2',
        name: 'Pizza',
        image: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png',
    },
    {
        id: '3',
        name: 'Sushi',
        image: 'https://cdn-icons-png.flaticon.com/512/2252/2252075.png',
    },
    {
        id: '4',
        name: 'Asian',
        image: 'https://cdn-icons-png.flaticon.com/512/3075/3075929.png',
    },
    {
        id: '5',
        name: 'Dessert',
        image: 'https://cdn-icons-png.flaticon.com/512/3075/3075922.png',
    },
];

const RESTAURANTS: Restaurant[] = [
    {
        id: '1',
        name: 'Burger King',
        rating: 4.5,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        distance: '1.2 km',
        deliveryTime: '20-30 min',
        minOrder: 10,
        deliveryFee: 2.5,
        tags: ['Burger', 'Fast Food', 'American'],
        latitude: 41.7151,
        longitude: 44.8271,
        address: '123 Main St',
    },
    {
        id: '2',
        name: 'Pizza Hut',
        rating: 4.2,
        reviews: 85,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        distance: '2.5 km',
        deliveryTime: '30-45 min',
        minOrder: 15,
        deliveryFee: 3.0,
        tags: ['Pizza', 'Italian', 'Fast Food'],
        latitude: 41.7251,
        longitude: 44.8371,
        address: '456 Elm St',
    },
];

const MENU_ITEMS: MenuItem[] = [
    {
        id: '1',
        restaurantId: '1',
        name: 'Double Cheeseburger',
        description:
            'Two beef patties, cheddar cheese, pickles, onions, ketchup, and mustard.',
        price: 8.5,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'Burgers',
    },
    {
        id: '2',
        restaurantId: '1',
        name: 'Chicken Nuggets (10pc)',
        description:
            'Crispy breaded chicken breast nuggets served with your choice of dip.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1562967963-ed7b699c3c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        category: 'Sides',
    },
    {
        id: '3',
        restaurantId: '1',
        name: 'French Fries',
        description: 'Classic salted french fries, golden and crispy.',
        price: 3.5,
        image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd4054?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'Sides',
    },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const dataService = {
    getCategories: async (): Promise<Category[]> => {
        await sleep(MOCK_DELAY);
        return CATEGORIES;
    },

    getRestaurants: async (): Promise<Restaurant[]> => {
        await sleep(MOCK_DELAY);
        return RESTAURANTS;
    },

    getRestaurantById: async (id: string): Promise<Restaurant | undefined> => {
        await sleep(MOCK_DELAY);
        return RESTAURANTS.find((r) => r.id === id);
    },

    getMenuByRestaurantId: async (
        restaurantId: string,
    ): Promise<MenuItem[]> => {
        await sleep(MOCK_DELAY);
        return MENU_ITEMS.filter((item) => item.restaurantId === restaurantId);
    },

    getPopularRestaurants: async (): Promise<Restaurant[]> => {
        await sleep(MOCK_DELAY);
        return RESTAURANTS.sort((a, b) => b.rating - a.rating).slice(0, 5);
    },

    // Example for bookings
    createBooking: async (booking: any): Promise<boolean> => {
        await sleep(MOCK_DELAY);
        console.log('Booking created:', booking);
        return true;
    },
};
