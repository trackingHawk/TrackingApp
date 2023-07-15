import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    View, Button, TextInput, StyleSheet
} from 'react-native';



const App = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const saveData = async () => {
        const url = "http://192.168.8.235:3000/users";
        let result = await fetch(url, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(name, age)
        })
    }
    return (
        <View>
            <Text>Hi</Text>
            <TextInput placeholder='Enter name' style={style.input}
                value={name} onChangeText={(text) => setName(text)}
            />
            <TextInput placeholder='Enter age' style={style.input}
                value={age} onChangeText={(text) => setAge(text)}
            />
            <Button title='save ' onPress={saveData} />
        </View>

    );
};
const style = StyleSheet.create({
    input: {
        borderColor: 'skyblue',
        borderWidth: 1,
        margin: 20
    }
})


export default App;
