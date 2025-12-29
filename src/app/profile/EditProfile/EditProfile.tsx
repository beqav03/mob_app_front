import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    TextInput,
    ScrollView,
    Image,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    ChevronLeft,
    Camera,
    User,
    Mail,
    Phone,
    Check,
} from 'lucide-react-native';
import { mockUser } from '../../../services/dataService';
import { COLORS } from '../../../constants/colors';
import styles from './EditProfile.styles';

const EditProfile = () => {
    const navigation = useNavigation();
    const [name, setName] = useState(mockUser.name);

    const handleSave = () => {
        // Logic to save changes would go here
        navigation.goBack();
    };

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
                <Text style={styles.headerTitle}>Edit Profile</Text>
                <TouchableOpacity
                    onPress={handleSave}
                    style={styles.saveButton}
                >
                    <Check size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Avatar Edit Section */}
                    <View style={styles.avatarSection}>
                        <View style={styles.avatarWrapper}>
                            <Image
                                source={mockUser.avatar}
                                style={styles.avatar}
                            />
                            <TouchableOpacity style={styles.cameraBadge}>
                                <Camera size={20} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.changePhotoText}>
                            Change Profile Picture
                        </Text>
                    </View>

                    {/* Form Fields */}
                    <View style={styles.form}>
                        {/* Name Field - Editable */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Full Name</Text>
                            <View style={styles.inputContainer}>
                                <User
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    value={name}
                                    onChangeText={setName}
                                    placeholder="Enter your name"
                                />
                            </View>
                        </View>

                        {/* Email Field - Non-editable/Colorless */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email Address</Text>
                            <View
                                style={[
                                    styles.inputContainer,
                                    styles.disabledInput,
                                ]}
                            >
                                <Mail
                                    size={20}
                                    color={COLORS.gray}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={[styles.input, styles.disabledText]}
                                    value={mockUser.email}
                                    editable={false}
                                    selectTextOnFocus={false}
                                />
                            </View>
                            <Text style={styles.helperText}>
                                Email cannot be changed directly for security
                                reasons.
                            </Text>
                        </View>

                        {/* Phone Field - Non-editable/Colorless */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Phone Number</Text>
                            <View
                                style={[
                                    styles.inputContainer,
                                    styles.disabledInput,
                                ]}
                            >
                                <Phone
                                    size={20}
                                    color={COLORS.gray}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={[styles.input, styles.disabledText]}
                                    value={mockUser.phone}
                                    editable={false}
                                    selectTextOnFocus={false}
                                />
                            </View>
                            <Text style={styles.helperText}>
                                Visit Security settings to update your verified
                                phone number.
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.updateButton}
                        onPress={handleSave}
                    >
                        <Text style={styles.updateButtonText}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default EditProfile;
