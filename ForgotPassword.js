import React, { Component, useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    View, Button, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView, Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const onPressButton = () => {
    Alert.alert('Button Pressed');
    fetchGlobalConfiguration()
}
function fetchGlobalConfiguration() {
    axios({
        method: 'get',
        url: `http://192.168.8.69:806/globalConfiguration`,
    }).then((response) => {
        var classString = response.data
        console.log("Class in String Format")
        console.log(classString)
        const createDynamicClass = new Function(classString + ' return GlobalConfiguration;');
        console.log("Created Dynamic Class")
        console.log(createDynamicClass)
        window.GlobalConfiguration = createDynamicClass();
    }).catch(err => console.log("error " + err));
}
const image = { uri: 'https://i.pinimg.com/564x/3f/1f/a5/3f1fa5775bf84c4ca15cc05ba927f3b6.jpg' };

class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }
    render() {
        const self = this
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ position: 'relative', height: 700 }}>
                        <View style={{ backgroundColor:   '#127050', width: '100%', height: '100%' }}>
                            <View style={styles.logoView}>
                                <Image source={require('../assets/trackinghawk.png')} style={styles.icon} />
                                <Text style={styles.text}>TrackingHawk</Text>

                            </View>

                            <View style={styles.content}>
                                <View style={styles.loginHeading}>
                                    <Text style={{ fontSize: 20, color: '#0d0c22', fontWeight: 'bold', padding: 10, textAlign: 'center' }}>Forgot Password</Text>
                                </View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginBottom: 10, marginTop: 20 }}>Please enter your email address to{'\n         '}request a password reset.</Text>

                                <View style={{ marginTop: 50, width: '100%', alignItems: 'center' }}>
                                    <View style={styles.inputContainer}>
                                        <Icon name="email" size={30} color="black" style={styles.emailIcon} />
                                        <TextInput
                                            placeholder="Enter your email"
                                            value={this.state.password}
                                            onChangeText={(e) => { this.setState({ password: e }) }}
                                        >
                                        </TextInput>
                                    </View>


                                    <TouchableOpacity onPress={() => { alert("Password is changed"), this.props.navigation.navigate("LoginPage") }}
                                        style={styles.submit_btn}>
                                        <Text style={styles.submit_btn_text}>Submit</Text>
                                    </TouchableOpacity>

                                </View>


                            </View>
                        </View>
                    </View>


                </ScrollView>


            </View>
        );

    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoView: {
        marginTop: 30
    },
    icon: {
        width: 100,
        height: 100,
        marginLeft: 150,

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 20,
        width: '80%',
    },
    emailIcon: {
        marginHorizontal: 10,
    },
    loginHeading: {
        backgroundColor: '#fbb03c',
        width: 150,
        marginTop: -20,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 30,
        lineHeight: 44,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        position: 'absolute',
        marginTop: 200,
        backgroundColor: 'white',
        height: 550,
        width: 380,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginLeft: 15,
        alignItems: 'center'
    },
    submit_btn_text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    submit_btn: {
        backgroundColor: '#127050',
        padding: 20,
        borderRadius: 40,
        marginBottom: 0,
        width: '80%',
    }

});
export default ForgotPassword;
