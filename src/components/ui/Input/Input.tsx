import React from 'react';
import {
    View,
    TextInput,
    Text,
    TextInputProps,
    StyleProp,
    ViewStyle,
} from 'react-native';
import { styles } from './Input.styles';
import { COLORS } from '@/src/constants/colors';

export interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerStyle?: StyleProp<ViewStyle>;
}

export const Input = React.forwardRef<TextInput, InputProps>(
    ({ label, error, containerStyle, style, ...props }, ref) => {
        return (
            <View style={[styles.container, containerStyle]}>
                {label && <Text style={styles.label}>{label}</Text>}
                <TextInput
                    ref={ref}
                    style={[
                        styles.input,
                        error ? styles.inputError : null,
                        style,
                    ]}
                    placeholderTextColor={COLORS.gray}
                    {...props}
                />
                {error && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    },
);

Input.displayName = 'Input';
