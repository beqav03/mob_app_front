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
    headerTitleContainer: {
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    headerSubtitle: {
        fontSize: 12,
        color: COLORS.gray,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 120,
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        backgroundColor: COLORS.white,
        padding: 15,
        borderRadius: 16,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    legendBox: {
        width: 14,
        height: 14,
        borderRadius: 4,
    },
    availableBox: {
        backgroundColor: '#F0F7FF',
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    selectedBox: {
        backgroundColor: COLORS.primary,
    },
    occupiedBox: {
        backgroundColor: '#F1F5F9',
    },
    legendText: {
        fontSize: 12,
        color: COLORS.gray,
        fontWeight: '500',
    },
    floorPlanContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 24,
        padding: 20,
        minHeight: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    entranceLabel: {
        alignSelf: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: '#F1F5F9',
        borderRadius: 4,
        marginBottom: 20,
    },
    entranceText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: COLORS.gray,
        letterSpacing: 2,
    },
    tablesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 15,
    },
    tableCard: {
        width: (width - 110) / 2,
        height: 100,
        backgroundColor: '#F0F7FF',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'rgba(0, 122, 255, 0.2)',
    },
    occupiedTable: {
        backgroundColor: '#F1F5F9',
        borderColor: 'transparent',
    },
    selectedTable: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    tableNumber: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.text,
        marginTop: 6,
    },
    occupiedText: {
        color: COLORS.gray,
    },
    selectedText: {
        color: COLORS.white,
    },
    capacityBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
    },
    capacityText: {
        fontSize: 11,
        color: COLORS.gray,
        fontWeight: '500',
    },
    windowLabel: {
        marginTop: 30,
        borderTopWidth: 2,
        borderTopColor: '#E2E8F0',
        borderStyle: 'dashed',
        alignItems: 'center',
        paddingTop: 10,
    },
    windowText: {
        fontSize: 10,
        color: COLORS.gray,
        letterSpacing: 2,
        fontWeight: 'bold',
    },
    tipContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 10,
        gap: 10,
    },
    tipText: {
        fontSize: 12,
        color: COLORS.gray,
        lineHeight: 18,
        flex: 1,
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectionInfo: {
        flex: 1,
    },
    selectionLabel: {
        fontSize: 12,
        color: COLORS.gray,
    },
    selectionValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    continueButton: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 15,
    },
    disabledButton: {
        backgroundColor: COLORS.gray,
    },
    continueButtonText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});
