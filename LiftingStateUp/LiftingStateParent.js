import React, { useState } from 'react';
import { View, Text } from 'react-native';
import LiftingStateChild from './LiftingStateChild';
import { styles } from '../styles';

export default function LiftingStateParent() {
  // 1. STATE IS LIFTED HERE:
  // We keep 'count' in the parent so both Sibling A and Sibling B can access and modify it.
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Topic 1: Lifting State Up</Text>
      <Text>Parent Component (Holds the State: {count})</Text>
      {/* Pass the state and the updater function as PROPS to siblings */}
      <LiftingStateChild
        childName="Sibling A"
        sharedCount={count}
        onIncrement={incrementCount}
      />
      <LiftingStateChild
        childName="Sibling B"
        sharedCount={count}
        onIncrement={incrementCount}
      />
    </View>
  );
}