import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import fieldComponent from "./fieldComponent";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = props.handleSubmit
    }

    onSubmit = (values) => {
        this.props.userRegister(values);
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
                    <BTNText>Sign Up</BTNText>
                </TouchableOpacity>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userRegister: (registerDetails) => {
            dispatch({
                type: 'USER_REGISTER_ATTEMPT',
                details: registerDetails,
            });
        }
    }
};

export default reduxForm({
    form: "registerForm"
})(
    connect(
        null,
        mapDispatchToProps
    )(Register)
);
const Wrapper = styled.View`
    max-width: 400px;
    width: 100%;
    margin: 25px auto 0;
    padding: 0 25px;
`;

const BTNText = styled.Text`
    width: 100%;
    background: #32CD32;
    height: 48px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 48px;
    margin-top: 10px;
    text-transform: uppercase;
`
