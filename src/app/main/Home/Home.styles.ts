import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../constants/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    locationLabel: {
        fontSize: 12,
        color: COLORS.gray,
        marginBottom: 2,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.text,
        marginLeft: 4,
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginRight: 15,
    },
    profileAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    searchSection: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 15,
        gap: 12,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: COLORS.text,
    },
    filterButton: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryContainer: {
        marginVertical: 10,
    },
    categoryContent: {
        paddingHorizontal: 20,
        gap: 10,
    },
    categoryItem: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
    },
    categoryItemActive: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    categoryText: {
        fontSize: 14,
        color: COLORS.gray,
        fontWeight: '500',
    },
    categoryTextActive: {
        color: COLORS.white,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 25,
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    seeAllText: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: '600',
    },
    featuredList: {
        paddingLeft: 20,
        paddingRight: 10,
    },
    featuredCard: {
        width: width * 0.7,
        height: 180,
        marginRight: 15,
        borderRadius: 15,
        overflow: 'hidden',
    },
    featuredImage: {
        width: '100%',
        height: '100%',
    },
    featuredOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
    featuredName: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    featuredRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    featuredRatingText: {
        color: COLORS.white,
        fontSize: 12,
        marginLeft: 4,
        fontWeight: '600',
    },
    restaurantCard: {
        backgroundColor: COLORS.white,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
    },
    restaurantImage: {
        width: '100%',
        height: 150,
    },
    restaurantInfo: {
        padding: 15,
    },
    restaurantHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF9E5',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.text,
        marginLeft: 4,
    },
    restaurantCuisine: {
        fontSize: 13,
        color: COLORS.gray,
        marginTop: 4,
    },
    bookingDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
    },
    availableTables: {
        fontSize: 13,
        color: COLORS.primary,
        fontWeight: '600',
    },
    bookButton: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
    },
    bookButtonText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: 'bold',
    },
});
