import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, AlertTriangle, ShieldX } from 'lucide-react-native';
import { COLORS } from '../../../../constants/colors';
import styles from './DeleteAccount.styles';

const DeleteAccount = () => {
  const navigation = useNavigation();
  const [confirmationText, setConfirmationText] = useState('');

  const handleDelete = () => {
    if (confirmationText.toLowerCase() === 'delete') {
      // Mock delete logic
      navigation.getParent()?.navigate('Auth');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ChevronLeft size={28} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delete Account</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.warningCard}>
          <AlertTriangle size={32} color="#FF3B30" />
          <Text style={styles.warningTitle}>This action is permanent</Text>
          <Text style={styles.warningText}>
            You will lose all your booking history, saved restaurants, and account preferences. This cannot be undone.
          </Text>
        </View>

        <View style={styles.consequences}>
          <View style={styles.consequenceItem}>
            <View style={styles.bullet} />
            <Text style={styles.consequenceText}>All active bookings will be cancelled.</Text>
          </View>
          <View style={styles.consequenceItem}>
            <View style={styles.bullet} />
            <Text style={styles.consequenceText}>Your saved payment methods will be removed.</Text>
          </View>
          <View style={styles.consequenceItem}>
            <View style={styles.bullet} />
            <Text style={styles.consequenceText}>You will lose access to loyalty rewards.</Text>
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Type "DELETE" to confirm</Text>
          <TextInput
            style={styles.input}
            placeholder="DELETE"
            autoCapitalize="characters"
            value={confirmationText}
            onChangeText={setConfirmationText}
          />

          <TouchableOpacity 
            style={[
              styles.deleteButton,
              confirmationText.toLowerCase() !== 'delete' && styles.disabledButton
            ]}
            onPress={handleDelete}
            disabled={confirmationText.toLowerCase() !== 'delete'}
          >
            <Text style={styles.deleteButtonText}>Delete My Account</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>I changed my mind</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeleteAccount;