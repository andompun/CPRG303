import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

const Stack = createStackNavigator();

export default function App({ navigation }) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName ="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}