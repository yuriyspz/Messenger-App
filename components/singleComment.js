import React from 'react';
import {connect} from "react-redux";
import styled from "styled-components/native";
import { View, Text } from "react-native";

class SingleComment extends React.Component {

    render() {

        return (
            <View>
                <Text>Comment ID-----{this.props.comments.itemid}</Text>
                <Text>Comment Content----{this.props.comments.content}</Text>
                <Text>Comment Author------{this.props.comments.autor}</Text>
            </View>
        )
    }
}

export default SingleComment;
