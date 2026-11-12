import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import our individual screen components 
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen.';

// 1. Initialize the Tab Navigator object 

const Tab = createBottomTabNavigator();

export default function App() {
    return (
    // 2. Navigation Container MUST be the outermost component 
    <NavigationContainer>

      {/* // 3. Tab.Navigator creates the actual bottom bar UI */}
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}>
          
          {/* 4. Tab.Screen defines each tab button and links it to a component */}
          <Tab.Screen  
            name="Home"
            component={HomeScreen}
            options={{ title: 'Feed' }} // The text shown on the tab button
          />

          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'My Account' }}
          /> 
      </Tab.Navigator>

    </NavigationContainer>
    );
}