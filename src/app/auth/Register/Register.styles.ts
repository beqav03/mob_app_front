import { COLORS } from '../../../constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    secondContainer: {
        flexDirection: 'row',
        gap: 12,
        width: '100%',
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 30,
        paddingTop: 50, // Extra padding for safe area
    },
    headerContainer: {
        marginBottom: 40,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textLight,
    },
    formContainer: {
        width: '100%',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: COLORS.textLight,
        marginBottom: 8,
        fontWeight: '600',
    },
    input: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        color: COLORS.text,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 20,
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    footerText: {
        color: COLORS.textLight,
        fontSize: 16,
    },
    linkText: {
        color: COLORS.primary,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
});
