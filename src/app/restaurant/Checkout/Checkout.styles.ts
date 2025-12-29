import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: COLORS.white,
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    scrollContent: {
        padding: 20,
    },
    priceSummary: {
        backgroundColor: COLORS.white,
        borderRadius: 24,
        padding: 20,
        marginBottom: 30,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    priceLabel: {
        fontSize: 14,
        color: COLORS.gray,
    },
    priceValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    totalRow: {
        marginTop: 10,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 16,
    },
    methodCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedMethod: {
        borderColor: COLORS.primary,
        backgroundColor: '#F0F7FF',
    },
    methodLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    methodText: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.text,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.lightGray,
    },
    radioActive: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary,
        borderWidth: 5,
    },
    appleIcon: {
        backgroundColor: '#000',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    appleText: {
        color: COLORS.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
    secureNote: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 20,
    },
    secureText: {
        fontSize: 12,
        color: COLORS.gray,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 35,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
    },
    payButton: {
        backgroundColor: COLORS.primary,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    payButtonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
