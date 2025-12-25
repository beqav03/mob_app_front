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
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        marginLeft: 15,
    },
    content: {
        padding: 20,
    },
    cardItem: {
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        padding: 25,
        marginBottom: 20,
        height: 180,
        justifyContent: 'space-between',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardLogo: {
        fontSize: 24,
        color: COLORS.white,
        fontWeight: 'bold',
    },
    cardNumber: {
        fontSize: 22,
        color: COLORS.white,
        letterSpacing: 2,
        marginVertical: 20,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardLabel: {
        color: COLORS.gray,
        fontSize: 12,
        marginBottom: 4,
    },
    cardValue: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderStyle: 'dashed',
    },
    addButtonText: {
        fontSize: 16,
        color: COLORS.text,
        marginLeft: 10,
        fontWeight: '600',
    },
});
