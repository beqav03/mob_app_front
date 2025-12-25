import { COLORS } from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: COLORS.white,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.inputBackground,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: COLORS.text,
    },
    content: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 15,
    },
    recentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    recentIcon: {
        marginRight: 15,
        fontSize: 16,
        color: COLORS.gray,
    },
    recentText: {
        fontSize: 16,
        color: COLORS.textLight,
        flex: 1,
    },
    resultCard: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    resultImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: COLORS.gray,
    },
    resultInfo: {
        flex: 1,
        marginLeft: 15,
    },
    resultName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    resultMeta: {
        fontSize: 13,
        color: COLORS.textLight,
        marginTop: 4,
    },
});
