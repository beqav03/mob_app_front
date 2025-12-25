import { COLORS } from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        width: '100%',
    },
    primary: {
        backgroundColor: COLORS.primary,
    },
    secondary: {
        backgroundColor: COLORS.secondary,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    disabled: {
        backgroundColor: COLORS.secondary,
        opacity: 0.5,
        shadowOpacity: 0,
        elevation: 0,
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
    },
    textPrimary: {
        color: COLORS.white,
    },
    textOutline: {
        color: COLORS.primary,
    },
});
