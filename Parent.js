import { View, Text } from 'react-native'
import React from 'react'
// import DrawerNavigator from './DrawerNavigator'
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

class Parent extends React.Component {
  
  render(){
    return(

      <View>
        <Text>Hifvfi</Text>
      </View>    
      )
  }
}
const appNavigator=createDrawerNavigator({
  Home:{
    screen:Parent
  }
})


export default Parent;