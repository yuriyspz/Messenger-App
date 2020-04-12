import React from 'react';
import styled from 'styled-components/native';

const fieldComponent = ({ input: { onChange, ...input }, ...rest}) => (
    <InputWrap>
        <CustomInput onChangeText={onChange} {...input} {...rest} />
    </InputWrap>
);
const InputWrap = styled.View`
    width: 100%;
    margin-bottom: 10px;
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
export default fieldComponent;

