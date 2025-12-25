import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from './types';
import { COLORS } from '../constants/colors';

// Screen Imports
import Home from '../app/main/Home/Home';
import Search from '../app/main/Search/Search';
import Saved from '../app/main/Saved/Saved';
import MyBookings from '../app/profile/MyBookings/MyBookings';
import Profile from '../app/main/Profile/Profile';

// Component Imports
import BottomNav from '../components/navigation/BottomNav/BottomNav';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <BottomNav {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="MyBookings" component={MyBookings} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
