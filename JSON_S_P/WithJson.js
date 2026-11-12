import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

export default function WithJson() {
  const [output, setOutput] = useState("");

  const handleGoodSave = async () => {
    const myProfile = { name: "Alice", age: 25 };

    try {
      // GOOD: JSON.stringify() converts the object into a pure text string.
      const stringifiedData = JSON.stringify(myProfile);
      await AsyncStorage.setItem('@good_profile', stringifiedData);

      // Load the string back from storage
      const loadedString = await AsyncStorage.getItem('@good_profile');

      // GOOD: JSON.parse() converts the string back into a real JavaScript object.
      const parsedData = JSON.parse(loadedString);

      // Now we can easily access properties like .name and .age again
      setOutput(`Success! Name is ${parsedData.name}, Age is ${parsedData.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.title}>
        4. WITH JSON Stringify/Parse
      </Text>
      <Text>Output: {output}</Text>
      <Button
        title="Save Object via JSON (Succeeds)"
        onPress={handleGoodSave}
        color="green"
      />
    </View>
  );
}