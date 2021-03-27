import React from 'react';
import { Text, View } from 'react-native';
import Counter from './components/Counter';
import EventButton from './components/EventButton';

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
            <EventButton />
        </View>
    );
};

export default App;