import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import styles from './BottomNav.styles';
import { COLORS } from '@/src/constants/colors';

const BottomNav: React.FC<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                // Icon mapping based on route name
                let iconName: keyof typeof Ionicons.glyphMap = 'help';
                if (route.name === 'Home')
                    iconName = isFocused ? 'home' : 'home-outline';
                else if (route.name === 'Map')
                    iconName = isFocused ? 'map' : 'map-outline';
                else if (route.name === 'Saved')
                    iconName = isFocused ? 'heart' : 'heart-outline';
                else if (route.name === 'Notifications')
                    iconName = isFocused
                        ? 'notifications'
                        : 'notifications-outline';
                else if (route.name === 'Profile')
                    iconName = isFocused ? 'person' : 'person-outline';

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        //testID={options.tabBarTestID}
                        onPress={onPress}
                        style={styles.tabButton}
                    >
                        <View
                            style={[
                                styles.iconContainer,
                                isFocused && styles.focusedIconContainer,
                            ]}
                        >
                            <Ionicons
                                name={iconName}
                                size={24}
                                color={
                                    isFocused
                                        ? COLORS.primary
                                        : COLORS.secondary
                                }
                            />
                            {isFocused && <View style={styles.activeDot} />}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNav;
