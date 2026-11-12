import { View, Text } from 'react-native'; 
import { styles } from './styles';

export default function HomeScreen () {
    return (
    <View style={styles.container}>
        <Text style={styles.title1}>🏡 Home Tab</Text>

        <Text style={styles.text}>
            This is the main feed. Notice that when you switch tabs and come back, this screen doesn't have to reload from scratch.
        </Text>

    </View>
    );
}