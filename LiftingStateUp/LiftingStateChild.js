import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export default function LiftingStateChild({ childName, sharedCount, onIncrement, reset }) {
  return (
    <View style={styles.box}>
      <Text>{childName}</Text>
      {/* 2. It displays the shared state passed from the parent */}
      <Text>Count is: {sharedCount}</Text>
      {/* 3. It triggers the parent's function to update the shared state */}
      <Button title={`Increment from ${childName}`} onPress={onIncrement} />
      <View><Button title={`reset from ${childName}`} onPress={reset} /></View>
    </View>
  );
}