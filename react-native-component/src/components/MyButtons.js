import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = props => {
    console.log(props);
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
            }}
            onPress={() => alert('Click !!!')}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>
                {props.children || props.title}
            </Text> 
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: 'button',
};

export default MyButton;