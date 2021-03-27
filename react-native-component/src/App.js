import React from 'react';
import { Text, View } from 'react-native';
import Counter from './components/Counter';
import EventInput from './components/EventInput';
import EventButton from './components/EventInput';

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
            <EventInput />
        </View>
    );
};

export default App;