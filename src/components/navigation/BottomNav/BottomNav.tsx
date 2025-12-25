import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Home, Search, Heart, User, Calendar } from 'lucide-react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../../constants/colors';
import styles from './BottomNav.styles';

const BottomNav: React.FC<BottomTabBarProps> = ({
    state,
    navigation,
    descriptors,
    insets,
}) => {
    const tabs = [
        { name: 'Home', icon: Home, label: 'Explore' },
        { name: 'Search', icon: Search, label: 'Search' },
        { name: 'Saved', icon: Heart, label: 'Saved' },
        { name: 'MyBookings', icon: Calendar, label: 'Bookings' },
        { name: 'Profile', icon: User, label: 'Profile' },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => {
                const isFocused = state.index === index;
                const Icon = tab.icon;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: state.routes[index].key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(tab.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={tab.name}
                        style={styles.tabItem}
                        onPress={onPress}
                        activeOpacity={0.7}
                    >
                        <Icon
                            size={24}
                            color={isFocused ? COLORS.primary : COLORS.gray}
                            strokeWidth={isFocused ? 2.5 : 2}
                        />
                        <Text
                            style={[
                                styles.tabLabel,
                                {
                                    color: isFocused
                                        ? COLORS.primary
                                        : COLORS.gray,
                                },
                            ]}
                        >
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNav;
