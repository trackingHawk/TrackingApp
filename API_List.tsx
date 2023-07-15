import React, { Component, useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Platform,
    Button,
    ScrollView
} from "react-native";

const App = () => {
    const [data, setData] = useState([]);
    const getAPIData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIData();
    }, [])
    return (
        <ScrollView>
            <Text style={{ fontSize: 20 }}>Hello</Text>
            {data.length ?
                data.map((item) => 
                    <View style={{ padding:20, borderColor:'grey', borderBottomWidth:1 }}>
                        <Text>Id:{item.id}</Text>
                        <Text>Title:{item.title}</Text>
                    </View>
                )
                :
                null

}
        </ScrollView>

    );
};


export default App;
