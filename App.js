/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  SafeAreaView,Text
} from 'react-native';
// import { AppNavigator } from './src/navigations/main';
import Splash from './src/screens/splashscreen/splash';
import Editor from './src/screens/editorscreen/Editor';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
    {/* <Splash/> */}
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'Splash'}>
                {/* <Stack.Screen name="drawerNavigation" component={drawerNavigation} /> */}
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Editor" component={Editor} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};
export default App;
