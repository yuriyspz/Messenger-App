import React from 'react';
import {connect} from "react-redux";
import styled from "styled-components/native";
import {View, Text, TouchableWithoutFeedback, FlatList} from "react-native";
import {navigate} from "../App";
import CreateComment from "./createComment";


class SinglePost extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
                <View>
                    <Text>Post ID-----{this.props.postid}</Text>
                    <Text>Post Content----{this.props.content}</Text>
                    <Text>Post Author------{this.props.author}</Text>
                </View>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts.posts,
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getPosts: () => {
//             dispatch({type: 'GET_POSTS_ATTEMPT'});
//         }
//     }
// };

export default connect(null, null)(SinglePost);
