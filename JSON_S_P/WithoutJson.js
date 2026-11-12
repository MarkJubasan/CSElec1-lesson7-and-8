import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

export default function WithoutJson() {
  const [output, setOutput] = useState("");

  const handleBadSave = async () => {
    const myProfile = { name: "Alice", age: 25 };

    try {
      // BAD: Attempting to save a raw JavaScript object directly.
      // This will either crash the app or save the useless text "[object Object]".
      await AsyncStorage.setItem('@bad_profile', myProfile);

      const loaded = await AsyncStorage.getItem('@bad_profile');
      // BAD: Without parsing, we cannot access loaded.name
      setOutput(loaded);
    } catch (error) {
      setOutput("CRASH: Cannot save raw objects.");
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.title}>
        3. WITHOUT JSON Stringify/Parse
      </Text>
      <Text>Output: {output}</Text>
      <Button
        title="Save Object Directly (Fails)"
        onPress={handleBadSave}
        color="red"
      />
    </View>
  );
}