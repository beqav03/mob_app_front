import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../constants/colors';

const { width } = Dimensions.get('window');

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
        fontWeight: '700',
        color: COLORS.text,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.text,
        marginBottom: 16,
        marginTop: 10,
    },
    cardContainer: {
        marginBottom: 24,
    },
    paymentCard: {
        width: '100%',
        height: 190,
        borderRadius: 20,
        padding: 24,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 8,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardType: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    cardNumber: {
        color: COLORS.white,
        fontSize: 22,
        letterSpacing: 2,
        fontWeight: '600',
        marginVertical: 20,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 10,
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    cardValue: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: '600',
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
        paddingHorizontal: 4,
    },
    defaultToggle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        fontSize: 14,
        color: COLORS.gray,
        marginLeft: 8,
        fontWeight: '500',
    },
    activeActionText: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    deleteButton: {
        padding: 8,
        backgroundColor: '#FFF5F5',
        borderRadius: 8,
    },
    addCardButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: COLORS.primary,
        marginBottom: 32,
    },
    addCardText: {
        marginLeft: 10,
        fontSize: 15,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    walletContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    walletItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    noBorder: {
        borderBottomWidth: 0,
    },
    walletLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    walletIcon: {
        width: 40,
        height: 24,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    appleText: {
        color: COLORS.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
    walletLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.text,
    },
    securityNote: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    securityText: {
        fontSize: 12,
        color: COLORS.gray,
        marginLeft: 8,
        textAlign: 'center',
    },
});
