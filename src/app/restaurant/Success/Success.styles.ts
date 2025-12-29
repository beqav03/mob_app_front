import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    iconWrapper: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#F0F7FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 15,
        color: COLORS.gray,
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 40,
    },
    summaryBox: {
        width: '100%',
        backgroundColor: '#F8FAFC',
        borderRadius: 20,
        padding: 20,
        marginBottom: 40,
    },
    summaryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    summaryLabel: {
        fontSize: 12,
        color: COLORS.gray,
        marginBottom: 2,
    },
    summaryValue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    mainButton: {
        width: '100%',
        backgroundColor: COLORS.primary,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    mainButtonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        width: '100%',
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: COLORS.gray,
        fontSize: 16,
        fontWeight: '600',
    },
});
