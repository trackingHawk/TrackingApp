import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect } from 'react';
const styles = StyleSheet.create({
    container: {

        height: 700,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bubble: {
        backgroundColor: "white",
        borderWidth: 0.5,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        // padding: 15,
        // width: 150,
        height:40,
        marginBottom:10

    },
    arrow:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor:'red',
        borderWidth:16,
        alignItems:'center',
        marginTop:32,         

    },
    arrowBorder:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor:'#007a87',
        borderWidth:16,
        alignSelf:'center',
        marginTop:90
    },
    name:{
        fontSize:16,
        marginBottom:5
    },
// image:{
//     width:10,
//     height:10
// }
});


export default () => (


    <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{ width: '100%', height: '100%' }}
            region={{
                latitude: 27.176670,
                longitude: 78.008072,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }}
        >
            <Marker
                coordinate={{
                    latitude: 27.176670,
                    longitude: 78.008072,
                }}
                // image={require('../src/assets/marker.png')}
                title="Test"
                description="this is test"
            >
                <Callout tooltip>
                    <View>
                        <View style={styles.bubble}>
                            {/* <Text style={styles.name}>Temple</Text> */}
                            <Text>Shri Shyam ji Temple</Text>
                            <View style={styles.arrowBorder}></View>
                            <View style={styles.arrow}></View>
                        </View>
                    </View>
                </Callout>
            </Marker>
        </MapView>
        <TouchableOpacity></TouchableOpacity>
    </View>
)