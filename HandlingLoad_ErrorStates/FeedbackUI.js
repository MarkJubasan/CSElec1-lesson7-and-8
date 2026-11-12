import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export default function FeedbackUI({ isLoading, error, data }) {
  // 1. Check Loading State first
  if (isLoading) {
    return (
      <View style={styles.box}>
        <Text>⏳ Fetching data from server...</Text>
      </View>
    );
  }

  // 2. Check Error State second
  if (error) {
    return (
      <View style={styles.box}>
        <Text style={{ color: 'red', fontWeight: 'bold' }}>❌ Error: {error}</Text>
      </View>
    );
  }

  // 3. Render Data if it exists
  if (data) {
    return (
      <View style={styles.box}>
        <Text>✅ Data received: {data}</Text>
      </View>
    );
  }

  // 4. Default Idle State
  return (
    <View style={styles.box}>
      <Text>Press a button to start fetching.</Text>
    </View>
  );
}