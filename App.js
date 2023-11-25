import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/Screens/HomeScreen';
import DisplayScreen from './app/Screens/DisplayScreen';
import CartScreen from './app/Screens/CartScreen';
import { Text } from 'react-native';
import { StateProvider } from './app/reducer/context';

// Text.defaultProps.style = { fontFamily: 'Manrope' };
const Stack = createStackNavigator();

const App = () => {
  return (
    <StateProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Details"
          component={DisplayScreen}
          options={{ headerShown: false }} 
        />
           <Stack.Screen
          name="cartSection"
          component={CartScreen}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </StateProvider>
  );
};


export default App;
