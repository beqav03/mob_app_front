import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 100, // Above bottom nav
        right: 20,
        zIndex: 999,
    },
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 10,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)', // Faded background
        justifyContent: 'flex-end',
    },
    chatContainer: {
        backgroundColor: COLORS.white,
        height: height * 0.8,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 20,
    },
    chatHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    aiBadge: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    headerStatus: {
        fontSize: 12,
        color: '#4CD964',
        fontWeight: '600',
    },
    closeButton: {
        padding: 4,
    },
    messagesList: {
        padding: 20,
        paddingBottom: 40,
    },
    messageWrapper: {
        flexDirection: 'row',
        marginBottom: 20,
        maxWidth: '85%',
    },
    userMessageWrapper: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    aiMessageWrapper: {
        alignSelf: 'flex-start',
    },
    aiIconCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 4,
    },
    userIconCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: COLORS.gray,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginTop: 4,
    },
    messageBubble: {
        padding: 14,
        borderRadius: 20,
    },
    aiBubble: {
        backgroundColor: '#F0F7FF',
        borderTopLeftRadius: 4,
    },
    userBubble: {
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 4,
    },
    messageText: {
        fontSize: 15,
        lineHeight: 20,
    },
    aiMessageText: {
        color: COLORS.text,
    },
    userMessageText: {
        color: COLORS.white,
    },
    inputArea: {
        padding: 20,
        paddingBottom: Platform.OS === 'ios' ? 40 : 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    loadingText: {
        fontSize: 12,
        color: COLORS.gray,
        marginLeft: 8,
        fontStyle: 'italic',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 10,
        maxHeight: 100,
        fontSize: 15,
        color: COLORS.text,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    sendButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    sendButtonDisabled: {
        backgroundColor: COLORS.gray,
    },
});
