import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StylesProvider from './src/contexts/StylesProvider';
import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';

const Stack = createStackNavigator();

const RegTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    background: '#5A4DAE',
    border: 'black',
    text: 'white',
    card: '#483D8B',
  },
};

function App() {
  return (
    <StylesProvider>
      <NavigationContainer theme={RegTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </StylesProvider>
  );
}

export default App;
