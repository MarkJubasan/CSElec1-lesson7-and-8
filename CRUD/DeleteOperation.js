import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { styles } from '../styles';

export default function DeleteOperation({ onActionComplete }) {
// DELETE: Remove the last item from the array
    const deleteItem = async () => {
        const existingData = await AsyncStorage.getItem('@crud_list');
        if (!existingData) return;

        let list = JSON.parse(existingData);
        if (list.length === 0) return;

        // We use .pop() to remove the last item, or .filter() to remove specific IDs 
        list.pop();
        
        await AsyncStorage.setItem('@crud_list', JSON.stringify(list));
        onActionComplete();

    };
    
    
    return (
        <View style={styles.box}>
            <Button title="[D] Delete Last Item" onPress={deleteItem} color="#d9534f" /> 
        </View>
    );
}
