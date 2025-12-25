import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TextInput,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    ChevronLeft,
    Search,
    MessageSquare,
    Mail,
    Phone,
    ChevronDown,
    ChevronUp,
    HelpCircle,
    ExternalLink,
} from 'lucide-react-native';
import { COLORS } from '../../../constants/colors';
import styles from './Support.styles';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Support = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            question: 'How do I cancel my booking?',
            answer: 'You can cancel your booking through the "My Bookings" tab. Select the booking you wish to cancel and tap the "Cancel Booking" button. Please note our 24-hour cancellation policy.',
        },
        {
            id: 2,
            question: 'Is there a fee for table reservations?',
            answer: 'Most restaurants on our platform offer free reservations. Some premium locations may require a small deposit that is deducted from your final bill.',
        },
        {
            id: 3,
            question: 'Can I add items to my pre-order later?',
            answer: 'Yes, you can modify your pre-order up to 2 hours before your scheduled reservation time through the booking details page.',
        },
        {
            id: 4,
            question: 'What if I am running late for my reservation?',
            answer: 'Restaurants typically hold tables for 15-20 minutes. We recommend calling the restaurant directly if you are running late. You can find their number in your booking details.',
        },
    ];

    const toggleFaq = (id: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedFaq(expandedFaq === id ? null : id);
    };

    const ContactMethod = ({ icon: Icon, title, subtitle, onPress }: any) => (
        <TouchableOpacity style={styles.contactCard} onPress={onPress}>
            <View style={styles.contactIconWrapper}>
                <Icon size={24} color={COLORS.primary} />
            </View>
            <View style={styles.contactTextContent}>
                <Text style={styles.contactTitle}>{title}</Text>
                <Text style={styles.contactSubtitle}>{subtitle}</Text>
            </View>
            <ChevronRight size={18} color={COLORS.gray} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <ChevronLeft size={28} color={COLORS.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Help & Support</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Search Section */}
                <View style={styles.searchSection}>
                    <Text style={styles.welcomeText}>How can we help you?</Text>
                    <View style={styles.searchContainer}>
                        <Search size={20} color={COLORS.gray} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search for help..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                </View>

                {/* Contact Methods */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contact Us</Text>
                    <ContactMethod
                        icon={MessageSquare}
                        title="Live Chat"
                        subtitle="Wait time: ~2 minutes"
                        onPress={() => {}}
                    />
                    <ContactMethod
                        icon={Mail}
                        title="Email Support"
                        subtitle="Response within 24 hours"
                        onPress={() => {}}
                    />
                    <ContactMethod
                        icon={Phone}
                        title="Phone Support"
                        subtitle="Available 10:00 - 22:00"
                        onPress={() => {}}
                    />
                </View>

                {/* FAQs */}
                <View style={styles.section}>
                    <View style={styles.sectionHeaderRow}>
                        <Text style={styles.sectionTitle}>
                            Popular Questions
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.faqContainer}>
                        {faqs.map((faq) => (
                            <View key={faq.id} style={styles.faqItem}>
                                <TouchableOpacity
                                    style={styles.faqHeader}
                                    onPress={() => toggleFaq(faq.id)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={styles.faqQuestion}>
                                        {faq.question}
                                    </Text>
                                    {expandedFaq === faq.id ? (
                                        <ChevronUp
                                            size={20}
                                            color={COLORS.primary}
                                        />
                                    ) : (
                                        <ChevronDown
                                            size={20}
                                            color={COLORS.gray}
                                        />
                                    )}
                                </TouchableOpacity>
                                {expandedFaq === faq.id && (
                                    <View style={styles.faqAnswerContainer}>
                                        <Text style={styles.faqAnswer}>
                                            {faq.answer}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                </View>

                {/* Legal Links */}
                <View style={styles.footerSection}>
                    <TouchableOpacity style={styles.legalLink}>
                        <Text style={styles.legalText}>Terms of Service</Text>
                        <ExternalLink size={14} color={COLORS.gray} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.legalLink}>
                        <Text style={styles.legalText}>Privacy Policy</Text>
                        <ExternalLink size={14} color={COLORS.gray} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// Re-using ChevronRight from settings/security patterns
const ChevronRight = ({ size, color }: { size: number; color: string }) => (
    <View style={{ transform: [{ rotate: '-90deg' }] }}>
        <ChevronDown size={size} color={color} />
    </View>
);

export default Support;
