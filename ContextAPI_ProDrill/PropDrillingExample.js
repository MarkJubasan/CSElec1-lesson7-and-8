import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export default function PropDrillingExample() {
  const secretData = "Top Secret Code: 1234";

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Topic 2A: The Problem (Prop Drilling)</Text>
      <MiddleComponent data={secretData} />
    </View>
  );
}

// The Middle Component doesn't care about the data, but MUST accept it as a prop
// just to pass it down to the Deep Component. This is "Prop Drilling".
function MiddleComponent({ data }) {
  return (
    <View style={styles.box}>
      <Text>Middle Component (Acting as a bridge)</Text>
      <DeepComponent data={data} />
    </View>
  );
}

function DeepComponent({ data }) {
  return (
    <View style={styles.box}>
      <Text>Deep Component (Finally uses the data): {data}</Text>
    </View>
  );
}