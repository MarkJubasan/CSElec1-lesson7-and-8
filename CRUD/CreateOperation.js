import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles';

export default function CreateOperation({ onActionComplete }) {
  // CREATE: Add a new item to the stored array
  const createItem = async () => {
    // 1. Get existing data (or empty array if null)
    const existingData = await AsyncStorage.getItem('@crud_list');
    const list = existingData ? JSON.parse(existingData) : [];

    // 2. Create the new item
    const newItem = {
      id: Date.now(),
      text: "New Item Created!"
    };

    // 3. Push to array, stringify, and save
    list.push(newItem);
    await AsyncStorage.setItem('@crud_list', JSON.stringify(list));

    // Trigger the Read component to refresh
    onActionComplete();
  };

  return (
    <View style={styles.box}>
      <Button
        title="[C] Create New Item"
        onPress={createItem}
      />
    </View>
  );
}