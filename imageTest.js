import React, { Component, useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    View, Button, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView, Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { JSEncrypt } from 'jsencrypt'


const image = { uri: 'https://i.pinimg.com/564x/3f/1f/a5/3f1fa5775bf84c4ca15cc05ba927f3b6.jpg' };

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }
    }

    componentDidMount() {
        this.fetchGlobalConfiguration()
    }

    fetchGlobalConfiguration() {
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

    render() {
        const self = this
        function submitForm() {



            // console.log(window.GlobalConfiguration._token)
            var encrypt = new JSEncrypt();
            encrypt.setPublicKey(window.GlobalConfiguration.publicKey);
            var encPassword = encrypt.encrypt(self.state.password);
            // console.log("encPassword : " + encPassword)
            const options = {
                method: 'POST',
                url: `http://192.168.8.69:806/login`,
                // params: { 'api-version': '3.0' },
                headers: {
                    'content-type': 'application/json',
                    // 'X-RapidAPI-Key': 'your-rapidapi-key',
                    // 'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                },
                data:
                {
                    username: self.state.email,
                    password: encPassword,
                    // _token: window.GlobalConfiguration._token,
                    type: 'hash',

                },
            };

            axios
                .request(options)
                .then(function (response) {
                    console.log(response);
                    if (response.data === 'au') {
                        // self.setLoggedIn(true);
                        self.props.navigation.navigate("Home")
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });

        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View>
                            <ImageBackground>
                                <Image source={require('../assets/2_2.jpg')} />
                            </ImageBackground>
                            <View style={styles.logoView}>
                                <Image source={require('../assets/car.png')} style={styles.icon} />
                                {/* <Text style={styles.text}>TrackingHawk</Text> */}

                            </View>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', marginTop: 280, margin: 20, width:'100%' }}>
                        <Text style={styles.text}>Login</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name='alternate-email' size={20} style={{ marginTop: 14, marginRight: 5 }} />
                            <TextInput placeholder='Enter your email' style={{ borderBottomWidth: 1.5, borderBottomColor: 'grey', width: 330, paddingBottom: 2 }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop:10 }}>
                            <MaterialIcons name='lock' size={20} style={{ marginTop: 14, marginRight: 5 }} />
                            <TextInput placeholder='Enter your password' style={{ borderBottomWidth: 1.5, borderBottomColor: 'grey', width: 330, paddingBottom: 2 }} secureTextEntry={true} />

                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                            <Text style={{ color: '#678fea', fontWeight: 800, marginLeft: 250, margin: 10 }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>

            </View>

        );

    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoView: {
        marginTop: 30,
        flexDirection: 'row',
        position: 'absolute',

    },
    icon: {
        marginLeft: 30,
        marginTop: 40


    },
    text: {
        fontSize: 30,
        lineHeight: 44,
        fontWeight: 'bold',
        textAlign: 'center'
    },


});
export default LoginPage;
