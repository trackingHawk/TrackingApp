import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../bottom/Home';
import Settings from '../bottom/Settings';
import Track from '../bottom/Track';
// import { Image } from 'react-native-svg';
const Bottom = createBottomTabNavigator();
export default class HomeScreen extends Component {
    render() {
        return (
            // <>
            // <Text>hiiiiiiiii</Text>
            // </>
            <Bottom.Navigator>
                <Bottom.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Image source={require('../assets/home.png')} style={{width:20,height:20 }}  />
                        ),
                    }} />
                <Bottom.Screen
                    name="Settings"
                    component={Settings}
                    options={{ headerShown: false,
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <Image source={require('../assets/settings.jpg')} style={{width:20,height:20}}/>
                        ),
                    }} />
                <Bottom.Screen
                    name="Track"
                    component={Track}
                    options={{ headerShown: false,
                        tabBarLabel: 'Track',
                        tabBarIcon: ({ color }) => (
                            <Image source={require('../assets/settings.jpg')} style={{width:20,height:20}}/>
                        ),
                    }} />
            </Bottom.Navigator>
        )
    }
}