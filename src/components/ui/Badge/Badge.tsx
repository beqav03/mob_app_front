import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { styles } from './Badge.styles';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'outline';
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    style,
    textStyle,
}) => {
    const getBadgeStyle = () => {
        switch (variant) {
            case 'secondary':
                return styles.secondary;
            case 'success':
                return styles.success;
            case 'error':
                return styles.error;
            case 'outline':
                return styles.outline;
            default:
                return styles.primary;
        }
    };

    const getTextStyle = () => {
        if (variant === 'outline') return styles.textPrimary;
        return styles.textWhite;
    };

    return (
        <View style={[styles.container, getBadgeStyle(), style]}>
            <Text style={[styles.text, getTextStyle(), textStyle]}>
                {children}
            </Text>
        </View>
    );
};
