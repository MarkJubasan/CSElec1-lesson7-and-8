import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import { styles } from '../styles';

export default function ContextExample() {
  return (
    <ThemeProvider>
      <View style={styles.section}>
        <Text style={styles.title}>Topic 2B: The Solution (Context API)</Text>
        {/* Notice we DO NOT pass props to the MiddleComponent anymore */}
        <ContextMiddleComponent />
      </View>
    </ThemeProvider>
  );
}

function ContextMiddleComponent() {
  return (
    <View style={styles.box}>
      <Text>Middle Component (No props passed here!)</Text>
      <ContextDeepComponent />
    </View>
  );
}

function ContextDeepComponent() {
  // 3. Consume the Context directly where it is needed
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <View style={styles.box}>
      <Text>Deep Component grabs data directly: {theme}</Text>
      <Button
        title="Toggle Theme"
        onPress={() => setTheme(theme === "Dark Mode" ? "Light Mode" : "Dark Mode")}
      />
    </View>
  );
}