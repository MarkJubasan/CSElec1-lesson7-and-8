import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { styles } from '../styles';


export default function UpdateOperation({ onActionComplete }) {
// UPDATE: Find the first item and change its text
    const updateItem = async () => {
        const existingData = await AsyncStorage.getItem('@crud_list');
        if (!existingData) return;

        let list = JSON.parse(existingData);
        if (list.length === 0) return;

        // We use .map() to loop through. If we find the item, we change its text. 
        list = list.map((item, index) => {
            if (index === 0) {//just update the very first item for this example
                return{...item, text: "Item UPDATED!"};
            }
            return item;
        });

        await AsyncStorage.setItem('@crud_list', JSON.stringify(list));
        onActionComplete();
    };

        return (
            <View style={styles.box}>
                <Button title="[U] Update First Item" onPress={updateItem} color="#f0ad4e" />
            </View>
    );
}