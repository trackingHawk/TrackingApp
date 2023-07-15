import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleOpenSidebar = () => {
        this.props.navigation.openDrawer();
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: 60, flexDirection: 'row', alignItems: 'center', elevation: 3, backgroundColor: '#231875' }}>
                    <TouchableOpacity style={{ marginLeft: 15 }} onPress={this.handleOpenSidebar}>
                        <Image source={require('../assets/bars2.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <Image source={require('../assets/trackinghawk.png')} style={{ width: 30, height: 30 }} />
                        <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 5, color: '#fff' }}>TrackingHAWK</Text>
                    </View>
                </View>
                <Image source={require('../assets/holi.jpg')}
                    style={{
                        width: '100%',
                        height: 200,
                        alignSelf: "center",
                    }}
                />
                <Text style={{ fontSize: 15, fontWeight: 600, color: '#333' }}>Hare krishna hare krishna,krishna krishna hare hare</Text>

            </View>
        )
    }
}