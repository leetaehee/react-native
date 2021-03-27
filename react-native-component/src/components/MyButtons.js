import React from 'react';
import { TouchableOpacity, Text, ImagePropTypes } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                marginBottom: 10,
            }}
            onPress={() => props.onPress()}
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

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default MyButton;