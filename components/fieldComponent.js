import React from 'react';
import styled from 'styled-components/native';

const fieldComponent = ({ input: { onChange, ...input }, meta: {touched, error, warning}, ...rest}) => (
    <InputWrap>
        <CustomInput onChangeText={onChange} {...input} {...rest} />
        {touched && ((error && <ErrorField>{error}</ErrorField>) || (warning &&
            <WarningField>{warning}</WarningField>))}
    </InputWrap>
);
const InputWrap = styled.View`
    width: 100%;
    margin-bottom: 15px;
    position: relative;
`;
const CustomInput = styled.TextInput`
    width: 100%;
    height: 48px;
    color: black;
    font-size: 26px;
    padding-left: 12px;
    border: 1px solid #dedede;
`;
const ErrorField = styled.Text`
    color: red;
    font-size: 12px;
    text-align: left;
    position: absolute;
    bottom: -15px;
`;
const WarningField = styled.Text`
    color: orange;
    font-size: 12px;
    text-align: left;
    position: absolute;
`;
export default fieldComponent;

