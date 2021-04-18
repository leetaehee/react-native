import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Image, Input } from '../components';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 20px;
`;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();

    /*
        키보드 감추기.. 스크롤은 되지 않음 

        import { TouchableWithoutFeedback, Keyboard } from 'react-native'; 추가 할 것 

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                ...
            </Container>
        </TouchableWithoutFeedback>     
     */

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}
        >
            <Container>
                <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)} 
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={() => {}}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default Login;