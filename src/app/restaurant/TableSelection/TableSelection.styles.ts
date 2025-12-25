import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../constants/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary, // Dark background for floor plan
    },
    header: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 20,
    },
    legendContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 10,
        borderRadius: 10,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    legendColor: {
        width: 15,
        height: 15,
        borderRadius: 4,
        marginRight: 8,
    },
    legendText: {
        color: COLORS.white,
        fontSize: 12,
    },
    floorPlan: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    table: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#555',
        margin: 10,
    },
    tableRound: {
        borderRadius: 50,
    },
    tableRect: {
        borderRadius: 8,
    },
    tableText: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: COLORS.white,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    selectedInfo: {
        fontSize: 16,
        color: COLORS.text,
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: COLORS.gray,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
