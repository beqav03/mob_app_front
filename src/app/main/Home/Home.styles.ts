import { COLORS } from '@/src/constants/colors';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    subGreeting: {
        fontSize: 16,
        color: COLORS.textLight,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.gray,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        marginHorizontal: 20,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginBottom: 20,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: COLORS.text,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.text,
        marginLeft: 20,
        marginBottom: 15,
    },
    categoriesContainer: {
        paddingLeft: 20,
        paddingBottom: 20,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    categoryImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    categoryImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    categoryText: {
        fontSize: 14,
        color: COLORS.text,
        fontWeight: '500',
    },
    activeCategory: {
        backgroundColor: COLORS.primary,
    },
    activeCategoryText: {
        color: COLORS.white,
    },
    restaurantList: {
        paddingHorizontal: 20,
        paddingBottom: 100, // Space for bottom nav
    },
    restaurantCard: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    restaurantImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    restaurantInfo: {
        padding: 15,
    },
    restaurantHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        flex: 1,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.text,
        marginLeft: 4,
    },
    restaurantMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    metaText: {
        fontSize: 14,
        color: COLORS.textLight,
        marginLeft: 4,
        marginRight: 15,
    },
});
