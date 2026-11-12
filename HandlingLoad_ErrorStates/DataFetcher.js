import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FeedbackUI from './FeedbackUI';
import { styles } from '../styles';

export default function DataFetcher() {
  // Declare the three distinct states for UI feedback
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const simulateFetch = (shouldFail) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);

      if (shouldFail) {
        setError("Failed to connect to the database.");
      } else {
        setData("User Profile: Jane Doe");
      }
    }, 1500);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Topic 3: Loading & Error States</Text>
      {/* Pass states to the UI component */}
      <FeedbackUI isLoading={isLoading} error={error} data={data} />
      <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
        <Button title="Fetch (Success)" onPress={() => simulateFetch(false)} />
        <Button title="Fetch (Fail)" onPress={() => simulateFetch(true)} color="red" />
      </View>
    </View>
  );
}