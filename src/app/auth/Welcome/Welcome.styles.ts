import { COLORS } from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    logoContainer: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 5,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    logoText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    title: {
        fontSize: 50,
        fontWeight: '800',
        color: COLORS.white,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        marginBottom: 50,
        lineHeight: 24,
    },
    button: {
        backgroundColor: COLORS.white,
        paddingVertical: 18,
        paddingHorizontal: 30,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 2,
    },
    buttonText: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    secondaryButton: {
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});
