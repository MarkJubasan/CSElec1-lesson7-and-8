import { View, Text } from 'react-native'; 
import { styles } from './styles';

export default function Lesson8Screen () {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title1}>Local Data Persistence</Text>

                <Text style={styles.text}>
                    Storing JSON Data, CRUD Operations, and AsyncStorage
                </Text>
            </View>
        </ScrollView>
        
    );
}