import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


class NewLogin extends Component {
  // debugger
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      email: '',
      password: '',
      hidePassword: true,
    }
  }
  managePasswordVisibility = () => {
    this.setState({
      hidePassword: !this.state.hidePassword
    });
  }
  render() {
    const { splashVisible } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ marginTop: 40 }}>
            <View style={styles.logoView}>
              <Image source={require('../assets/trackinghawk.png')} style={styles.image} />
              <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#333' }}>TrackingHAWK</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
              <Text style={styles.heading}>Let's get started.</Text>
              <Text style={styles.text1}>Enter your credentials to {'\n   '} access your account.</Text>
            </View>


            <View style={{ padding: 30 }}>
              <View style={styles.inputContainer}>
                <Text style={{ marginLeft: 5, fontSize: 14, position: 'absolute', paddingBottom: 40, color: '#4b33df', fontWeight: 'bold', textTransform: 'uppercase' }}>Username</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <MaterialIcons name='person' size={25} style={styles.icons} />
                  <TextInput
                    placeholder="Enter your username"
                    placeholderTextColor={'#a6a2a2'}
                    value={this.state.email}
                    style={styles.textInput}
                    onChangeText={(e) => { this.setState({ email: e }) }}
                  >
                  </TextInput>
                </View>

              </View>
              <View style={styles.inputContainer}>
                <Text style={{ marginLeft: 5, fontSize: 14, position: 'absolute', paddingBottom: 40, color: '#4b33df', fontWeight: 'bold', textTransform: 'uppercase' }}>Password</Text>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <MaterialIcons name='alternate-email' size={25} style={styles.icons} />
                  <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor={'#a6a2a2'}
                    style={styles.textInput}
                    value={this.state.password}
                    // secureTextEntry={true}
                    secureTextEntry={this.state.hidePassword}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="send"
                    // onChangeText={(UserPassword) => this.setState({ UserPassword })}
                    onChangeText={(e) => { this.setState({ password: e }) }}
                  >
                  </TextInput>
                  {this.state.password ?
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.visibilityBtn}
                      onPress={() => this.managePasswordVisibility()}>
                      <MaterialIcons name={this.state.hidePassword ? 'visibility-off' : 'visibility'} size={25} style={styles.icon} />
                    </TouchableOpacity> :
                    null}

                </View>

              </View>
              <TouchableOpacity onPress={() => this.props.sObject.props.navigation.navigate("NewForgotPassword")}>
                <Text style={styles.Forgotpassword}>Forgot password?</Text>
              </TouchableOpacity>
            </View>


            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View>
              <ImageBackground source={require('../assets/Footer.png')} style={styles.bottomImage} />
            </View>
          </View>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ccc',
    // borderRadius: 10,
    // marginBottom: 15,
    width: '100%',
    marginBottom: 5,
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
  logoView: {
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 35
  },
  image: {
    width: 100,
    height: 80
  },
  btnImage: {
    width: 40,
    height: 40,
    position: 'absolute'
  },
  heading: {
    fontSize: 30,
    // marginTop:10,
    fontWeight: 'bold',
    color: '#231875'
  },
  icons: {
    marginTop: 10,
    marginRight: 10,
    color: '#231875',
  },
  icon: {
    marginTop: 10,
    // marginLeft:0,
    // marginRight: 0,
    color: '#231875',
  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 20,
    marginTop: 20
  },
  textInput: {
    // borderBottomWidth: 1.5,
    // borderBottomColor: 'grey',
    fontSize: 15,
    width: '82%',
    paddingBottom: 2,
    // fontWeight: 'bold',

  },
  Forgotpassword: {
    color: '#4b33df',
    fontWeight: 'bold',
    marginLeft: 225,
    // margin: 10
  },
  signInText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  signInButton: {
    backgroundColor: '#4b33df',
    padding: 15,
    borderRadius: 10,
    // marginBottom: 0,
    width: '80%',
  },
  bottomImage: {
    width: 410,
    height: 120
  }


});

export default NewLogin;


