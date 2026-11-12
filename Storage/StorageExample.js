import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

export default function StorageExample() {
  const [savedScore, setSavedScore] = useState(0);

  // Load the saved data when the component first mounts
  useEffect(() => {
    const loadScore = async () => {
      const storedValue = await AsyncStorage.getItem('@my_score');
      if (storedValue !== null) {
        setSavedScore(parseInt(storedValue)); // Convert text back to a number
      }
    };
    loadScore();
  }, []);

  // Save the new data to the device every time it changes
  const increaseAndSave = async () => {
    const newScore = savedScore + 1;
    setSavedScore(newScore);

    // AsyncStorage ONLY accepts strings, so we convert the number to a string
    await AsyncStorage.setItem('@my_score', newScore.toString());
  };

  return (
    <View style={styles.section}>
      <Text style={styles.title}>2. AsyncStorage (Persistent)</Text>
      <Text style={styles.text}>Saved Score: {savedScore}</Text>
      <Text style={styles.text}>
        If you reload the app, this score stays exactly where you left it because it is saved to the device storage.
      </Text>
      <Button
        title="Increase & Save Score"
        onPress={increaseAndSave}
        color="green"
      />
    </View>
  );
}