import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/colors';

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
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
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
    illustrationContainer: {
        marginVertical: 40,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F0F7FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 12,
    },
    description: {
        fontSize: 14,
        color: COLORS.gray,
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 10,
        marginBottom: 40,
    },
    inputGroup: {
        width: '100%',
        marginBottom: 32,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 56,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    countryCode: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.text,
        marginRight: 12,
    },
    divider: {
        width: 1,
        height: 24,
        backgroundColor: '#E2E8F0',
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: COLORS.text,
        letterSpacing: 1,
    },
    submitButton: {
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
    submitButtonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    secureBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    secureText: {
        fontSize: 12,
        color: COLORS.gray,
        marginLeft: 6,
    },
});
