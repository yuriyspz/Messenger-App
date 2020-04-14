import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {TouchableOpacity, Button} from "react-native";
import styled from "styled-components/native";
import fieldComponent from "./fieldComponent";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = props.handleSubmit
    }

    onSubmit = (values) => {
        this.props.userLogin(values);
        console.log(values);
    }

    render() {

        return (
            <Wrapper>
                <Field
                    name='username'
                    type='text'
                    component={fieldComponent}
                />
                <Field
                    name='password'
                    type='text'
                    secureTextEntry={true}
                    component={fieldComponent}
                />
                <TouchableOpacity onPress={this.handleSubmit(this.onSubmit)}>
                    <BTNText>Sign In</BTNText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign Up')}>
                    <BTNTextSingUp>Sign Up</BTNTextSingUp>
                </TouchableOpacity>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (loginDetails) => {
            dispatch({type: 'USER_LOGIN_ATTEMPT', username: loginDetails.username, password: loginDetails.password});
        }
    }
};

export default reduxForm({
    form: "loginForm",
})(
    connect(
        null,
        mapDispatchToProps
    )(Login)
);
const Wrapper = styled.View`
    max-width: 400px;
    width: 100%;
    margin: 25px auto 0;
    padding: 0 25px;
`;
const BTNText = styled.Text`
    background: #32CD32;
    height: 48px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 48px;
    margin-top: 10px;
    text-transform: uppercase;
`
const BTNTextSingUp = styled.Text`
    border: 1px solid #dedede;
    background: transparent;
    height: 48px;
    color: #000;
    font-size: 18px;
    text-align: center;
    line-height: 48px;
    margin-top: 10px;
    text-transform: uppercase;
`
