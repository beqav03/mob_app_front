import { COLORS } from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: COLORS.background,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        color: COLORS.black,
    },
    content: {
        padding: 20,
    },
    description: {
        fontSize: 14,
        color: COLORS.secondary,
        marginBottom: 30,
        lineHeight: 20,
    },
    spacer: {
        height: 30,
    },
});
