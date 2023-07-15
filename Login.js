
import React from 'react';
import moment from "moment";
import SelectLanguageModal from './Modals/SelectLanguageModal';
import { Platform, NativeModules } from 'react-native'
import { Input, Stack, FormControl } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import AppGlobalConfiguration from '../Globals/AppGlobalConfiguration';
import JSEncrypt from 'jsencrypt'
import base64 from 'react-native-base64'
import axios from 'axios';
import SocialApp from './SocialApps';

import { 
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    View,
    Button, Image, TouchableOpacity, Alert, Modal, Pressable,
    // PermissionsAndroid,
} from 'react-native';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            show: false,
            loading: false,
            timezone: null,
            modalVisible: false,
            selectedLanguage: null,
            selectedLanguageCode: null
        }
    }

    languages = AppGlobalConfiguration.languages

    componentDidMount() {
        this.setLanguage()
        this.setTimezone()
        // this.encryption('Abhishek')
        this.fetchGlobalConfiguration()
        // this.requestPermission()
        console.log("component did mound")

    }

    // requestPermission = async () => {
    //     try {
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA,
    //         {
    //           title: 'Cool Photo App Camera Permission',
    //           message:
    //             'Cool Photo App needs access to your camera ' +
    //             'so you can take awesome pictures.',
    //           buttonNeutral: 'Ask Me Later',
    //           buttonNegative: 'Cancel',
    //           buttonPositive: 'OK',
    //         },
    //       );
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         console.log('You can use the camera');
    //       } else {
    //         console.log('Camera permission denied');
    //       }
    //     } catch (err) {
    //       console.warn(err);
    //     }
    //   };

    fetchGlobalConfiguration() {
        axios({
            method: 'get',
            url: `${AppGlobalConfiguration.IPAddress}/globalConfiguration`,
        }).then((response) => {
            debugger
            var classString = response.data
            console.log(classString)
            const createDynamicClass = new Function(classString + ' return GlobalConfiguration;');
            console.log(createDynamicClass)
            window.GlobalConfiguration = createDynamicClass();
            const cookies = response.headers['set-cookie'];

            // Do something with the received cookies
            console.log(cookies);
        });
    }
    blobToBase64 = (blob) => {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }
    encryption = (data) => {
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(window.GlobalConfiguration.publicKey);

        // Perform our encryption based on our public key - only private key can read it!
        var encrypted = encrypt.encrypt(data);
        console.log(encrypted)

        // Decrypt with the private key...
        var decrypt = new JSEncrypt();
        decrypt.setPrivateKey(window.GlobalConfiguration.privateKey);
        var uncrypted = decrypt.decrypt(encrypted);
        console.log(uncrypted)

    }

    setTimezone() {
        this.setState({
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        })
    }

    setLanguage() {
        const deviceLanguage =
            Platform.OS === 'ios'
                ? NativeModules.SettingsManager.settings.AppleLocale ||
                NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
                : NativeModules.I18nManager.localeIdentifier;
        var deviceLanguageCode = deviceLanguage.split('_')[0]
        if (deviceLanguageCode == undefined)
            deviceLanguageCode = 'en'
        this.setState({
            selectedLanguageCode: deviceLanguageCode,
            selectedLanguage: this.languages[deviceLanguageCode].englishName
        })
    }

    formSubmit() {
        const self = this
        this.print()
        // console.log(window.GlobalConfiguration._token)
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(window.GlobalConfiguration.publicKey);
        var encPassword = encrypt.encrypt(this.state.password);
        console.log("encPassword : " + encPassword)
        const options = {
            method: 'POST',
            url: `${AppGlobalConfiguration.IPAddress}/login`,
            // params: { 'api-version': '3.0' },
            headers: {
                'content-type': 'application/json',
                // 'X-RapidAPI-Key': 'your-rapidapi-key',
                // 'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
            },
            data:
            {
                username: this.state.username,
                password: encPassword,
                // _token: window.GlobalConfiguration._token,
                type: 'hash',
                language: this.state.selectedLanguageCode,
                timezone: this.state.timezone,
            },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response);
                if (response.data === 'au')
                    self.props.navigation.navigate("Home")
            })
            .catch(function (error) {
                console.error(error);
            });

    }

    print() {
        this.setState({ show: true })
    }

    empty() {
        this.setState({
            username: '',
            password: '',
            show: false
        })
    }

    render() {
        console.log("component did render")

        const self = this;
        return (
            <>
                <ScrollView
                    style={{ flex: 1, backgroundColor: '#ffffff' }}
                    showsVerticalScrollIndicator={false}>
                    {/* Brand View */}
                    <ImageBackground
                        source={require('../Images/res.jpg')}
                        style={{
                            height: Dimensions.get('window').height / 3,
                        }}>
                        <View style={styles.brandView}>
                            <Image source={require('../Images/logo.png')} />
                        </View>
                    </ImageBackground>
                    <View style={styles.bottomView}>
                        {/* welcome view */}
                        <View style={{ padding: 30 }}>
                            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#4632A1', fontSize: 34 }}>Login</Text>
                                <View style={{}}>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.timezone}</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonOpen]}
                                        onPress={() => this.setState({ modalVisible: true })}
                                    >
                                        <Text style={styles.textStyle}>{this.state.selectedLanguage}</Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={{ marginTop: 30 }}>
                                <FormControl>
                                    <Stack space={5} >
                                        <Stack style={{ borderColor: '#4632A1' }}>
                                            <FormControl.Label>Username</FormControl.Label>
                                            <Input variant={'underlined'} p={2}
                                                placeholder="Username"
                                                onChangeText={(text) => this.setState({ username: text })}
                                                value={this.state.username} />
                                        </Stack>

                                        <Stack>
                                            <FormControl.Label>Password</FormControl.Label>
                                            <Input variant={'underlined'} p={2}
                                                placeholder="Password"
                                                secureTextEntry
                                                onChangeText={(text) => this.setState({ password: text })}
                                                value={this.state.password} />
                                        </Stack>
                                    </Stack>
                                    <View style={styles.forgotPasswordView}>
                                        <View>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                                                <Text style={{ color: 'blue' }}>Forgot Password ?</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Button title="Login" onPress={() => { this.formSubmit() }}></Button>
                                </FormControl>
                            </View>
                            {/* {(this.state.show) ?
                                <Text style={styles.title}>
                                    Username : {this.state.username}
                                </Text>
                                : ''}
                            {(this.state.show) ?
                                <Text style={styles.title}>
                                    Password : {this.state.password}
                                </Text>
                                : ''} */}

                            {/* Social App View */}
                            <SocialApp />

                        </View>
                    </View>
                </ScrollView>

                <SelectLanguageModal sObj={this} />
            </>
        )
    }
}
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    brandView: {
        flex: 1,
        alignItems: 'center',
        top: 68
    },
    brandViewText: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#fff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    forgotPasswordView: {
        height: 50,
        marginTop: 20,
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 0,
    },
    buttonOpen: {
        backgroundColor: '#213e94',
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default Login;



// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import LoginPage from './LoginPage';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       splashVisible: true,
//     };
//   }

//   componentDidMount() {
//     // Simulate a delay to show the splash screen for a few seconds
//     setTimeout(() => {
//       this.setState({ splashVisible: false });
//     }, 1000); // Adjust the duration as needed
//   }

//   render() {
//     const { splashVisible } = this.state;

//     return (
//       <>
//         {splashVisible && (
//           <View style={styles.container}>
//         <Image
//           source={require('../assets/trackinghawk.png')}
//           style={styles.image}
//         />
//         <Text style={styles.text}>TrackingHawk</Text>
//       </View>
//         )}
//         {!splashVisible && <LoginPage />}
//       </>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
// });
// export default App;
