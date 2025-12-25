import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    TextInput,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
} from 'react-native';
import { Sparkles, X, Send, Bot, User } from 'lucide-react-native';
import { COLORS } from '../../../constants/colors';
import styles from './ChatOverlay.styles';

interface Message {
    id: string;
    text: string;
    sender: 'ai' | 'user';
    timestamp: Date;
}

const ChatOverlay = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! I'm your AI Dining Assistant. I can help you find the perfect table or answer questions about your bookings. How can I help you today?",
            sender: 'ai',
            timestamp: new Date(),
        },
    ]);

    const flatListRef = useRef<FlatList>(null);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Simulated AI Response
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: "I've checked the availability for you. Guliani has a table for 4 available tonight at 19:30. Would you like me to reserve it?",
                sender: 'ai',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiResponse]);
            setIsLoading(false);
        }, 1500);
    };

    const renderMessage = ({ item }: { item: Message }) => (
        <View
            style={[
                styles.messageWrapper,
                item.sender === 'user'
                    ? styles.userMessageWrapper
                    : styles.aiMessageWrapper,
            ]}
        >
            {item.sender === 'ai' && (
                <View style={styles.aiIconCircle}>
                    <Bot size={16} color={COLORS.white} />
                </View>
            )}
            <View
                style={[
                    styles.messageBubble,
                    item.sender === 'user'
                        ? styles.userBubble
                        : styles.aiBubble,
                ]}
            >
                <Text
                    style={[
                        styles.messageText,
                        item.sender === 'user'
                            ? styles.userMessageText
                            : styles.aiMessageText,
                    ]}
                >
                    {item.text}
                </Text>
            </View>
            {item.sender === 'user' && (
                <View style={styles.userIconCircle}>
                    <User size={16} color={COLORS.white} />
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Floating Sparkle Button */}
            {!isVisible && (
                <TouchableOpacity
                    style={styles.floatingButton}
                    onPress={() => setIsVisible(true)}
                    activeOpacity={0.9}
                >
                    <Sparkles size={28} color={COLORS.white} />
                </TouchableOpacity>
            )}

            {/* AI Chat Modal */}
            <Modal
                visible={isVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.chatContainer}
                    >
                        {/* Header */}
                        <View style={styles.chatHeader}>
                            <View style={styles.headerLeft}>
                                <View style={styles.aiBadge}>
                                    <Sparkles size={16} color={COLORS.white} />
                                </View>
                                <View>
                                    <Text style={styles.headerTitle}>
                                        AI Assistant
                                    </Text>
                                    <Text style={styles.headerStatus}>
                                        Online • Ready to help
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => setIsVisible(false)}
                                style={styles.closeButton}
                            >
                                <X size={24} color={COLORS.gray} />
                            </TouchableOpacity>
                        </View>

                        {/* Messages List */}
                        <FlatList
                            ref={flatListRef}
                            data={messages}
                            keyExtractor={(item) => item.id}
                            renderItem={renderMessage}
                            contentContainerStyle={styles.messagesList}
                            onContentSizeChange={() =>
                                flatListRef.current?.scrollToEnd()
                            }
                        />

                        {/* Input Area */}
                        <View style={styles.inputArea}>
                            {isLoading && (
                                <View style={styles.loadingContainer}>
                                    <ActivityIndicator
                                        size="small"
                                        color={COLORS.primary}
                                    />
                                    <Text style={styles.loadingText}>
                                        AI is thinking...
                                    </Text>
                                </View>
                            )}
                            <View style={styles.inputRow}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Ask me anything..."
                                    value={input}
                                    onChangeText={setInput}
                                    multiline
                                />
                                <TouchableOpacity
                                    style={[
                                        styles.sendButton,
                                        !input.trim() &&
                                            styles.sendButtonDisabled,
                                    ]}
                                    onPress={handleSend}
                                    disabled={!input.trim() || isLoading}
                                >
                                    <Send size={20} color={COLORS.white} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        </View>
    );
};

export default ChatOverlay;
