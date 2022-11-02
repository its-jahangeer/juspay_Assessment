import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../screens/splashscreen/splash';
import Editor from '../screens/editorscreen/Editor';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'Splash'}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Editor" component={Editor} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};