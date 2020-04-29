import React from 'react';
import {connect} from "react-redux";
import {TouchableOpacity, View, TextInput} from "react-native";
import {Field, reduxForm} from 'redux-form';
import fieldComponent from "./fieldComponent";
import styled from "styled-components/native";

class CreateComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = props.handleSubmit
        this.state = {
            comment: ''
        }
    }

    onSubmit = () => {
        this.props.createComment(this.state.comment, this.props.postid);
    }
    render() {
        return (
            <Wrapper>
                <TextInput
                    name='comment'
                    type='text'
                    onChangeText={(value)=>this.setState({comment: value})}
                />
                <TouchableOpacity onPress={this.handleSubmit(this.onSubmit)}>
                    <BTNText>Add Comment</BTNText>
                </TouchableOpacity>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (values, postid) => {
            dispatch({type: 'CREATE_COMMENT_ATTEMPT', postid: postid, comment: values});
        }
    }
};
export default reduxForm({
    form: "addCommentForm"
})(
    connect(
        null,
        mapDispatchToProps
    )(CreateComment)
);
const Wrapper = styled.View`
    max-width: 400px;
    width: 100%;
    margin: 25px auto 0;
    padding: 0 25px;
`;
const BTNText = styled.Text`
    background: #32CD32;
    height: 24px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 24px;
    margin-top: 10px;
    text-transform: uppercase;
`;
