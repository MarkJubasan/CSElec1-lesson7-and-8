import { ScrollView, View, Text } from 'react-native'; 
import { styles } from './styles';
import LiftingStateParent from './LiftingStateUp/LiftingStateParent';
import PropDrillingExample from './ContextAPI_ProDrill/PropDrillingExample';
import ContextExample from './ContextAPI_ProDrill/ContextExample';

export default function ManagingStateUIfeedback () {
    return (
       
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title1}>Managing state & UI Feedback</Text>

                    <Text style={styles.text}>
                        Lifting State, Context API, and Loading/Error Handling
                    </Text>

                    <LiftingStateParent />
                    <PropDrillingExample/>
                    <ContextExample/>
                </View>
            </ScrollView>
    
    );
}