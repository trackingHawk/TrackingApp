import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import MainScreen from './Screens/MainScreen';
import Splash from './Screens/Splash';
import NewLogin from './Components/NewLogin';
 const Stack=createStackNavigator();

export default class AppNavigator extends Component {
  render() {
    return (
        <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Splash' component={Splash}  options={{headerShown:false}}/>
            <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
            <Stack.Screen name="NewLogin" component={NewLogin}  />

        </Stack.Navigator>
      </NavigationContainer>
    </>
    )
  }
}