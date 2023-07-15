import React, { Component, useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    View, Button, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
const image = { uri: 'https://i.pinimg.com/564x/3f/1f/a5/3f1fa5775bf84c4ca15cc05ba927f3b6.jpg' };

class LoginTest2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ position: 'relative', height: 700 }}>
                        <View style={{ backgroundColor: '#127050', width: '100%', height: '100%' }}>
                            <View style={styles.logoView}>
                                <Image source={require('../assets/trackinghawk.png')} style={styles.icon} />
                                <Text style={styles.text}>TrackingHawk</Text>
                            </View>

                            <View style={styles.content}>
                                <View style={styles.loginHeading}>
                                    <Text style={{ fontSize: 30, color: '#0d0c22', fontWeight: 'bold', padding: 10, textAlign: 'center' }}>Login</Text>
                                </View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginBottom: 10, marginTop: 10 }}>Enter your credentials to{'\n  '} access your account.</Text>

                                <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
                                    <View style={styles.inputContainer}>
                                        <Icon name="email" size={30} color="black" style={styles.emailIcon} />
                                        <TextInput
                                            placeholder="Enter your email"
                                            value={this.state.email}
                                            onChangeText={(e) => { this.setState({ email: e }) }}
                                        >
                                        </TextInput>
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Icon name="lock" size={30} color="black" style={styles.emailIcon} />
                                        <TextInput
                                            placeholder="Enter your password"
                                            value={this.state.password}
                                            onChangeText={(e) => { this.setState({ password: e }) }}
                                        >
                                        </TextInput>
                                    </View>

                                    {/* <TouchableOpacity onPress={() => { alert("Password is changed") }}
                                        style={styles.submit_btn}>
                                        <Text style={styles.submit_btn_text}>Login</Text>
                                    </TouchableOpacity> */}

                                </View>
                                <TouchableOpacity onPress={() => { }}>
                                    <Text style={{ color: '#678fea', fontWeight: 800, marginLeft: 200, margin: 10 }}>Forgot Password?</Text>
                                </TouchableOpacity>
                                <Text style={{ textAlign: "center", color: '#666', marginBottom: 10, fontWeight: 600 }}>Or, login with.....</Text>
                                <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                    <View style={{ marginRight: 50 }}>
                                        <TouchableOpacity onPress={() => { }}
                                            style={{
                                                borderColor: '#ddd',
                                                borderRadius: 40,
                                                borderWidth: 2,
                                                paddingHorizontal: 5,
                                                paddingVertical: 10
                                            }}
                                        >
                                            <Image source={require('../assets/google.png')} style={{ width: 45, height: 35 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginRight: 40 }}>
                                        <TouchableOpacity onPress={() => { }}
                                            style={{
                                                borderColor: '#ddd',
                                                borderRadius: 40,
                                                borderWidth: 2,
                                                paddingHorizontal: 5,
                                                paddingVertical: 10
                                            }}
                                        >
                                            <Image source={require('../assets/fb.png')} style={{ width: 45, height: 35 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginRight: 50 }}>
                                        <TouchableOpacity onPress={() => { }}
                                            style={{
                                                borderColor: '#ddd',
                                                borderRadius: 40,
                                                borderWidth: 2,
                                                paddingHorizontal: 5,
                                                paddingVertical: 10
                                            }}
                                        >
                                            <Image source={require('../assets/twitter3.png')} style={{ width: 45, height: 35 }} />
                                        </TouchableOpacity>
                                    </View>


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
        // marginTop: 10
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
export default LoginTest2
