import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming Expo, standard icons
import { TabParamList } from './types';

// Screens
import Home from '../app/main/Home/Home';
import Map from '../app/main/Map/Map';
import Saved from '../app/main/Saved/Saved';
import Profile from '../app/main/Profile/Profile';

// Colors (You can import these from your constants/colors.ts if you prefer)
const COLORS = {
    primary: '#000',
    inactive: '#999',
    background: '#fff',
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true, // Set to false if you want icons only
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.inactive,
                tabBarStyle: {
                    backgroundColor: COLORS.background,
                    borderTopWidth: 1,
                    borderTopColor: '#f0f0f0',
                    elevation: 5,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Map':
                            iconName = focused ? 'map' : 'map-outline';
                            break;
                        case 'Saved':
                            iconName = focused ? 'heart' : 'heart-outline';
                            break;
                        case 'Profile':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                        default:
                            iconName = 'help-circle';
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
