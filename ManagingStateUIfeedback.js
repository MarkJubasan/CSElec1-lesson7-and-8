import { SafeAreaProvider, SafeAreaView, ScrollView, View, Text } from 'react-native'; 
import { styles } from './styles';
import LiftingStateParent from './LiftingStateUp/LiftingStateParent';

export default function ManagingStateUIfeedback () {
    return (
       
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title1}>Managing state & UI Feedback</Text>

                    <Text style={styles.text}>
                        Lifting State, Context API, and Loading/Error Handling
                    </Text>

                    <LiftingStateParent />
                </View>
            </ScrollView>
        </SafeAreaView>
      
    );
}