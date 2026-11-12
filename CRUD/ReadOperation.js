import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

export default function ReadOperation({ refreshTrigger }) {
  const [items, setItems] = useState([]);

  // READ: Fetch the array from storage and parse it
  const readItems = async () => {
    const existingData = await AsyncStorage.getItem('@crud_list');

    if (existingData !== null) {
      setItems(JSON.parse(existingData));
    } else {
      setItems([]);
    }
  };

  // Run the read operation on mount, and whenever refreshTrigger changes
  useEffect(() => {
    readItems();
  }, [refreshTrigger]);

  return (
    <View style={styles.box}>
      <Text style={{ fontWeight: 'bold' }}>
        [R] Read Operation (Database Content):
      </Text>

      {items.length === 0 ? (
        <Text>List is empty.</Text>
      ) : null}

      {items.map((item) => (
        <Text key={item.id}>
          - {item.text} (ID: {item.id})
        </Text>
      ))}

      <Button
        title="Clear Database (Hard Reset)"
        onPress={async () => {
          await AsyncStorage.removeItem('@crud_list');
          readItems();
        }}
        color="gray"
      />
    </View>
  );
}