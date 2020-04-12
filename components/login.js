import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {Button, TextInput} from "react-native-web";
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

                <Button onPress={this.handleSubmit(this.onSubmit)} title='Login'/>
            </Wrapper>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (loginDetails) => {
            dispatch({type:'USER_LOGIN_ATTEMPT', username: loginDetails.username, password: loginDetails.password});
        }
    }
};

export default reduxForm({
    form: "loginForm"
})(
    connect(
        null,
        mapDispatchToProps
    )(Login)
);
const Wrapper = styled.View`
    max-width: 400px;
    width: 100%;
    margin: 50px auto 0;
`;
