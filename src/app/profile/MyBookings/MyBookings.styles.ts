import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: COLORS.white,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: COLORS.primary,
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.gray,
    },
    activeTabText: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    listContent: {
        padding: 20,
        paddingBottom: 100,
    },
    bookingCard: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    restaurantThumb: {
        width: 60,
        height: 60,
        borderRadius: 12,
    },
    headerInfo: {
        flex: 1,
        marginLeft: 12,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 4,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 6,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
    },
    cardDivider: {
        height: 1,
        backgroundColor: COLORS.lightGray,
        marginVertical: 16,
    },
    detailsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailText: {
        fontSize: 13,
        color: COLORS.text,
        marginLeft: 6,
        fontWeight: '500',
    },
    preOrderBadge: {
        marginTop: 12,
        backgroundColor: '#F0F7FF',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    preOrderText: {
        fontSize: 11,
        color: COLORS.primary,
        fontWeight: '600',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        marginTop: 20,
    },
    emptySubtitle: {
        fontSize: 14,
        color: COLORS.gray,
        textAlign: 'center',
        marginTop: 8,
    },
    exploreButton: {
        marginTop: 24,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
    },
    exploreButtonText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 15,
    },
});
