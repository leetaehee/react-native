import React from 'react';
import { Text, View } from 'react-native';
import PressableButton from './components/PressableButton';

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
            <PressableButton title="pressable" />
        </View>
    );
};

export default App;