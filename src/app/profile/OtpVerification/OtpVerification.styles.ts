import { COLORS } from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textLight,
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 40,
        paddingHorizontal: 10,
    },
    otpInput: {
        width: 60,
        height: 60,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.white,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.text,
    },
    otpInputActive: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
        borderWidth: 2,
    },
    timerText: {
        fontSize: 16,
        color: COLORS.textLight,
        marginBottom: 20,
    },
    resendText: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        backgroundColor: COLORS.primary,
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
        elevation: 2,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
