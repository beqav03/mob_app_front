import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Bell,
    Calendar,
    Tag,
    Info,
    ChevronLeft,
    MoreVertical,
    CheckCheck,
} from 'lucide-react-native';
import { mockNotifications } from '../../../services/dataService';
import { Notification } from '../../../types';
import { COLORS } from '../../../constants/colors';
import styles from './Notifications.styles';

const Notifications = () => {
    const navigation = useNavigation();

    const getIcon = (type: Notification['type']) => {
        switch (type) {
            case 'booking':
                return <Calendar size={20} color={COLORS.primary} />;
            case 'promotion':
                return <Tag size={20} color="#FF9500" />;
            case 'system':
                return <Info size={20} color="#5856D6" />;
            default:
                return <Bell size={20} color={COLORS.gray} />;
        }
    };

    const getIconBackground = (type: Notification['type']) => {
        switch (type) {
            case 'booking':
                return '#F0F7FF';
            case 'promotion':
                return '#FFF9F2';
            case 'system':
                return '#F5F5FF';
            default:
                return COLORS.lightGray;
        }
    };

    const renderNotificationItem = ({ item }: { item: Notification }) => (
        <TouchableOpacity
            style={[styles.notificationCard, !item.isRead && styles.unreadCard]}
            activeOpacity={0.7}
        >
            <View
                style={[
                    styles.iconContainer,
                    { backgroundColor: getIconBackground(item.type) },
                ]}
            >
                {getIcon(item.type)}
            </View>

            <View style={styles.textContent}>
                <View style={styles.cardHeader}>
                    <Text
                        style={[
                            styles.notifTitle,
                            !item.isRead && styles.unreadText,
                        ]}
                    >
                        {item.title}
                    </Text>
                    {!item.isRead && <View style={styles.unreadDot} />}
                </View>

                <Text style={styles.notifMessage} numberOfLines={2}>
                    {item.message}
                </Text>

                <Text style={styles.timeText}>
                    {new Date(item.createdAt).toLocaleDateString()} •{' '}
                    {new Date(item.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <ChevronLeft size={28} color={COLORS.text} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Notifications</Text>
                    <TouchableOpacity style={styles.menuButton}>
                        <MoreVertical size={24} color={COLORS.text} />
                    </TouchableOpacity>
                </View>

                <View style={styles.headerActions}>
                    <Text style={styles.notifCount}>
                        {mockNotifications.length} Total
                    </Text>
                    <TouchableOpacity style={styles.markReadButton}>
                        <CheckCheck size={16} color={COLORS.primary} />
                        <Text style={styles.markReadText}>
                            Mark all as read
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {mockNotifications.length > 0 ? (
                <FlatList
                    data={mockNotifications}
                    keyExtractor={(item) => item.id}
                    renderItem={renderNotificationItem}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <View style={styles.emptyIconWrapper}>
                        <Bell size={48} color={COLORS.gray} strokeWidth={1} />
                    </View>
                    <Text style={styles.emptyTitle}>No notifications yet</Text>
                    <Text style={styles.emptySubtitle}>
                        We'll notify you about your bookings and exclusive
                        offers.
                    </Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Notifications;
