import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E7EB', // Map base color
    },
    mapMockContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#F1F5F9',
    },
    gridOverlay: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.1,
        borderWidth: 0.5,
        borderColor: '#CBD5E1',
        // Mock grid pattern
    },
    markerContainer: {
        position: 'absolute',
        alignItems: 'center',
    },
    markerPin: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    markerPinActive: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.white,
        transform: [{ scale: 1.2 }],
    },
    markerActive: {
        zIndex: 10,
    },
    markerLabel: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        marginTop: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    markerLabelText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    overlayTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: Platform.OS === 'android' ? 40 : 10,
    },
    searchHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 12,
    },
    iconBtn: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        height: 44,
        borderRadius: 12,
        paddingHorizontal: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
        color: COLORS.text,
    },
    categoryScroll: {
        marginTop: 15,
    },
    categoryPadding: {
        paddingHorizontal: 20,
        gap: 10,
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    chipActive: {
        backgroundColor: COLORS.primary,
    },
    chipText: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.gray,
    },
    chipTextActive: {
        color: COLORS.white,
    },
    bottomCardContainer: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 100 : 80, // Above bottom nav
        left: 20,
        right: 20,
    },
    previewCard: {
        backgroundColor: COLORS.white,
        borderRadius: 24,
        flexDirection: 'row',
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 10,
    },
    previewImage: {
        width: 100,
        height: 110,
        borderRadius: 16,
    },
    previewContent: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    previewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    previewName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    heartBtn: {
        padding: 4,
    },
    previewMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    ratingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    ratingText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    metaText: {
        fontSize: 13,
        color: COLORS.gray,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    addressText: {
        fontSize: 12,
        color: COLORS.gray,
        flex: 1,
    },
    bookShortcutBtn: {
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 10,
        borderRadius: 12,
        marginTop: 8,
    },
    bookBtnText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
});
