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
        }
    }
    render() {
        const { splashVisible } = this.state;

        // console.warn(this.props);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ marginTop: 40 }}>
                        <View style={styles.logoView}>
                            <Image source={require('../assets/trackinghawk.png')} style={styles.image} />
                            <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#333' }}>TrackingHAWK</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.text1}>Please enter your username to{'\n      '}request a new password.</Text>
                        </View>
                        <View style={{ padding: 20, marginTop: 40 }}>
                            <View>
                                <Text style={styles.heading}>Reset password</Text>
                                <View>
                                    <View style={styles.inputContainer}>
                                        <MaterialIcons name='alternate-email' size={20} style={styles.icons} />
                                        <TextInput
                                            placeholder="Enter your username"
                                            value={this.state.email}
                                            onChangeText={(e) => { this.setState({ email: e }) }}
                                        >
                                        </TextInput>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.signInButton} onPress={() => this.props.navigation.navigate("SplashScreen")}>
                                <Text style={styles.signInText}>Reset</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
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
        marginBottom: 20,
        width: '100%',
        // marginTop: 10
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
    heading: {
        fontSize: 15,
        // marginTop:10,
        fontWeight: 'bold',
        color: '#231875'
    },
    icons: {
        // marginTop: 8,
        marginRight: 5,
        color: '#231875',
        fontWeight: 'bold'
    },

    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
        marginBottom: 20,
        marginTop: 20
    },
    // textInput: {
    //     borderBottomWidth: 1.5,
    //     borderBottomColor: 'grey',
    //     width: 330,
    //     paddingBottom: 2,
    //     fontWeight: 'bold',

    // },
    //   Forgotpassword: {
    //     color: '#678fea',
    //     fontWeight: 'bold',
    //     marginLeft: 240,
    //     margin: 10
    //   },
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
        marginTop: 126,
        width: 410,
        height: 125
    }


});

export default NewLogin;


