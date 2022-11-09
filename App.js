/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Splash from './src/screens/splashscreen/splash';
import Editor from './src/screens/editorscreen/Index';
import MainEditor from './src/screens/Storyscreen/mainEditor';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {ActionContextProvider} from './src/store/action-context';

const Stack = createStackNavigator();

const App = () => {

  return (
    <ActionContextProvider>

      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={'Splash'}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Editor" component={Editor} />
          <Stack.Screen name="MainEditor" component={MainEditor} />
        </Stack.Navigator>

      </NavigationContainer>
    </ActionContextProvider>
  );
};

export default App;
