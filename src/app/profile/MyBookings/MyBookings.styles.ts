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
    listContent: {
        padding: 20,
    },
    bookingCard: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
    },
    statusText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
    detailsContainer: {
        backgroundColor: COLORS.background,
        padding: 10,
        borderRadius: 10,
    },
    detailText: {
        color: COLORS.textLight,
        fontSize: 14,
        marginBottom: 5,
    },
    actionButton: {
        marginTop: 15,
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
    },
    actionText: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
});
