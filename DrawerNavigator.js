import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { View, Text, } from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';

// const Drawer=createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <View>
            {/* <Drawer.Navigator>
                <Drawer.Screen name='API_List' component={API_List}/>
            </Drawer.Navigator> */}
            <Text style={{ fontSize: 20 }}>Welcome to the app</Text>    
        </View>
    )
}

export default DrawerNavigator
