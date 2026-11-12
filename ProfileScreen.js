import { View, Text } from 'react-native'; 
import { styles } from './styles';

export default function ProfileScreen () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>👤 Profile Tab</Text>

            <Text style={styles.text}>
                This is the user profile section. The bottom menu bar remains visible.
            </Text>
        </View>
    );
}