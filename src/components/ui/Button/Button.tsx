import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles';
import { COLORS } from '@/src/constants/colors';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    loading?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                styles[variant],
                (loading || disabled) && styles.disabled,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator
                    color={
                        variant === 'outline' ? COLORS.primary : COLORS.white
                    }
                />
            ) : (
                <Text
                    style={[
                        styles.text,
                        variant === 'outline'
                            ? styles.textOutline
                            : styles.textPrimary,
                    ]}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
