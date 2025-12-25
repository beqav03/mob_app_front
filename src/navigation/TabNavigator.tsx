import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Platform } from 'react-native';
import { Home } from '../app/main/Home/Home';
import { Map } from '../app/main/Map/Map';
import { Saved } from '../app/main/Saved/Saved';
import { Notifications } from '../app/main/Notifications/Notifications';
import { Profile } from '../app/main/Profile/Profile';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabIcon = ({
    focused,
    label,
    icon,
}: {
    focused: boolean;
    label: string;
    icon: string;
}) => (
    <View
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: Platform.OS === 'ios' ? 10 : 0,
        }}
    >
        <Text
            style={{
                fontSize: 24,
                color: focused ? COLORS.primary : COLORS.gray,
            }}
        >
            {icon}
        </Text>
        {focused && (
            <Text
                style={{
                    fontSize: 10,
                    color: COLORS.primary,
                    marginTop: 2,
                    fontWeight: '600',
                }}
            >
                {label}
            </Text>
        )}
    </View>
);

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Platform.OS === 'ios' ? 30 : 20,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    height: 70,
                    shadowColor: COLORS.black,
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} label="Home" icon="🏠" />
                    ),
                }}
            />
            <Tab.Screen
                name="MapTab"
                component={Map}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} label="Map" icon="🗺️" />
                    ),
                }}
            />
            <Tab.Screen
                name="SavedTab"
                component={Saved}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} label="Saved" icon="❤️" />
                    ),
                }}
            />
            <Tab.Screen
                name="NotificationsTab"
                component={Notifications}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} label="Alerts" icon="🔔" />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} label="Profile" icon="👤" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
