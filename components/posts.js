import React from 'react';
import {connect} from "react-redux";
import styled from "styled-components/native";
import { View, Text } from "react-native";

class Posts extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('posts-------'+this.props.posts)
        this.props.getPosts();
    }
    render() {

        return (

            <View>
                {
                    this.props.posts.map((item, index) =>
                        <View key={index} post={item}>
                            <Text>{item.content}</Text>
                        </View>
                    )
                }

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.posts);
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch({type: 'GET_POSTS_ATTEMPT'});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
