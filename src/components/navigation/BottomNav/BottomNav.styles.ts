import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: 80,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tabLabel: {
        fontSize: 11,
        marginTop: 4,
        fontWeight: '600',
    },
});
