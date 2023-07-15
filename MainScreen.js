import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../sideScreens/HomeScreen'
// import SideBar from '../sidebar'
import SideBar from '../SideBar'
// import Notification from './Notification'
// import { TabRouter } from '@react-navigation/native'
const Drawer = createDrawerNavigator();
export default class MainScreen extends Component {
    render() {
        return (

            <Drawer.Navigator drawerContent={props => <SideBar {...props} />}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#231875',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitle: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/trackinghawk.png')}
                                style={{ width:50, height: 50 }}
                                resizeMode="contain"
                            />
                            <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
                                TrackingHAWK
                            </Text>
                        </View>
                    ),
                }}
                
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    
                />

            </Drawer.Navigator>
        )
    }
}