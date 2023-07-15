import { Text, View, TouchableOpacity, Image, Alert, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    handleOpenSidebar = () => {
        this.props.navigation.closeDrawer();
        Alert.alert('Button Clicked', 'The button was clicked!');
    };

    handleIconPress = (routeName) => {
        this.props.navigation.navigate(routeName);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 5, width: '100%', backgroundColor: 'blue' }}></View>
                <View style={{ height: 150, backgroundColor: '#6e58e5' }}>
                    <Image source={require('./assets/Eagle.png')}
                        style={{ marginTop: 20, alignSelf: 'center', width: 80, height: 80,borderTopRightRadius:50 }}
                    />
                    <Text
                        style={{ fontSize: 20, fontWeight: '700', alignSelf: 'center', color: '#fff' }}
                    >
                        TrackingHAWK
                    </Text>
                </View>

                <View style={{ marginTop: 50, width: '100%' }}>
                    <FlatList
                        data={[
                            { icon: require('./assets/alert.png'), title: 'Alert', route: 'NewLogin' },
                            { icon: require('./assets/tracker.png'), title: 'Tracker' },
                            { icon: require('./assets/geofence.png'), title: 'Geofence' },
                            { icon: require('./assets/logout.png'), title: 'LogOut' }
                        ]}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', width: '100%', height: 50, alignItems: 'center' }}
                                    onPress={() => this.handleIconPress(item.route)}
                                >
                                    <Image source={item.icon} style={{ width: 30, height: 30, marginLeft: 15 }} />
                                    <Text style={{ fontSize: 20, color: '#000', marginLeft: 10 }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>
               
            </View>

        )
    }
}
