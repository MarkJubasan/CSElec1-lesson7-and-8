import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export default function StateOnlyExample() {
  const [score, setScore] = useState(0);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>1. useState ONLY (Temporary)</Text>
      <Text style={styles.text}>Current Score: {score}</Text>
      <Text style={styles.text}>
        If you reload the app, this score resets back to 0 because it only exists in temporary RAM.
      </Text>
      <Button
        title="Increase Score"
        onPress={() => setScore(score + 1)}
      />
    </View>
  );
}