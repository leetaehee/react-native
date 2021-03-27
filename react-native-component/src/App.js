import React from 'react';
import { Text, View } from 'react-native';
import MyButton from './components/MyButtons';

const App = () => {
    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
            <MyButton title="button" />
            <MyButton title="button">Children Props</MyButton>
            <MyButton />
        </View>
    );
};

export default App;