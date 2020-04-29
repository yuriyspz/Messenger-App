import React from 'react';
import {connect} from "react-redux";
import {View, Text, FlatList} from "react-native";
import SinglePost from "./singlePost";
import {navigate} from "../App";
import styled from 'styled-components/native';
import CreateComment from "./createComment";
class Posts extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPosts();
        //this.props.getComments();
    }

    _renderChildItem(parentData, {item}) {

        return (
            <CommentWrap>
                <View>
                    <Text>Comment ID-----{item.id}</Text>
                    <Text>Comment Content----{item.comment}</Text>
                    <Text>Comment Author------{item.autor}</Text>
                </View>
            </CommentWrap>
        )
    }

    render() {

        return (
            <View>
                <View>
                    <FlatList
                        data={this.props.posts}
                        renderItem={({item}) =>
                            <View>
                                <SinglePost
                                    key={item.id}
                                    content={item.content}
                                    author={item.autor}
                                    postid={item.id}
                                />
                                <FlatList
                                    data={item.comment}
                                    renderItem={this._renderChildItem.bind(this, item)}
                                />
                                <CreateComment postid={item.id}/>
                            </View>}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        comments: state.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch({type: 'GET_POSTS_ATTEMPT'});
        },
        getComments: () => {
            dispatch({type: 'GET_COMMENTS_ATTEMPT'});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
const CommentWrap = styled.View`
background: #afa;
`;
const commentText = styled.Text`
font-size: 16px;
color: red;
`;
