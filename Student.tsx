import React, { Component } from "react";
import { Text, View } from "react-native"

class Student extends Component {
  render(){
    console.warn(this.props)
    return(
      <View>
      <Text>Student name :{this.props.name}</Text>
      </View>
    ) 
  }
}
 export default Student;