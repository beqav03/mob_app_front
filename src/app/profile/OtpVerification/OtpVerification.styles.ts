import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../constants/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },
    scrollContent: {
        padding: 24,
        alignItems: 'center',
    },
    iconContainer: {
        marginTop: 20,
        marginBottom: 32,
    },
    iconCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F0F7FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 15,
        color: COLORS.gray,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 40,
    },
    contactText: {
        color: COLORS.text,
        fontWeight: '600',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 40,
    },
    inputWrapper: {
        width: (width - 80) / 6,
        height: 60,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrapperActive: {
        borderColor: COLORS.primary,
        backgroundColor: '#F0F7FF',
    },
    otpInput: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        textAlign: 'center',
        width: '100%',
        height: '100%',
    },
    resendContainer: {
        marginBottom: 40,
    },
    timerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timerText: {
        fontSize: 14,
        color: COLORS.gray,
        fontWeight: '500',
    },
    resendButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    resendText: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    verifyButton: {
        width: '100%',
        backgroundColor: COLORS.primary,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    disabledButton: {
        backgroundColor: COLORS.gray,
        shadowOpacity: 0,
        elevation: 0,
    },
    verifyButtonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
