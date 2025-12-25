import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Animated,
    Dimensions,
    Modal,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
} from 'react-native';
import { styles } from './ChatOverlay.styles';
import { ChatMessage } from '@/src/types';
import { geminiService } from '@/src/services/geminiService';
import { COLORS } from '@/src/constants/colors';

const { height } = Dimensions.get('window');

export const ChatOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            text: "Hi! I'm your AI food assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const slideAnim = useRef(new Animated.Value(height)).current;
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        if (isOpen) {
            Animated.spring(slideAnim, {
                toValue: 0,
                useNativeDriver: true,
                damping: 20,
                mass: 1,
                stiffness: 100,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: height,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [isOpen]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputText('');
        setIsLoading(true);

        try {
            const responseText = await geminiService.sendMessage(userMsg.text);

            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMsg]);
        } catch (error) {
            console.error(error);
            const errorMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: "Sorry, I'm having trouble connecting right now.",
                sender: 'bot',
                timestamp: new Date(),
                isError: true,
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    const renderItem = ({ item }: { item: ChatMessage }) => (
        <View
            style={[
                styles.messageBubble,
                item.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}
        >
            <Text
                style={[
                    styles.messageText,
                    item.sender === 'user'
                        ? styles.userMessageText
                        : styles.botMessageText,
                ]}
            >
                {item.text}
            </Text>
        </View>
    );

    return (
        <>
            {!isOpen && (
                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => setIsOpen(true)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.fabIcon}>💬</Text>
                </TouchableOpacity>
            )}

            <Modal
                visible={isOpen}
                transparent
                animationType="none"
                onRequestClose={() => setIsOpen(false)}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={styles.overlayContainer}
                >
                    <Animated.View
                        style={[
                            styles.chatWindow,
                            { transform: [{ translateY: slideAnim }] },
                        ]}
                    >
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>AI Assistant</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setIsOpen(false)}
                            >
                                <Text style={styles.closeButtonText}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.messagesContainer}>
                            <FlatList
                                ref={flatListRef}
                                data={messages}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ paddingBottom: 20 }}
                                onContentSizeChange={() =>
                                    flatListRef.current?.scrollToEnd()
                                }
                                showsVerticalScrollIndicator={false}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={inputText}
                                onChangeText={setInputText}
                                placeholder="Ask me anything..."
                                placeholderTextColor={COLORS.textLight}
                                multiline
                            />
                            <TouchableOpacity
                                style={styles.sendButton}
                                onPress={handleSend}
                                disabled={isLoading || !inputText.trim()}
                            >
                                {isLoading ? (
                                    <ActivityIndicator
                                        color={COLORS.white}
                                        size="small"
                                    />
                                ) : (
                                    <Text style={styles.sendButtonText}>→</Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </KeyboardAvoidingView>
            </Modal>
        </>
    );
};
