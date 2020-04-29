import React from 'react';
import {connect} from "react-redux";
import { View, Text, FlatList } from "react-native";
import SinglePost from "./singlePost";

class Comments extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getComments();
    }
    render() {

        return (

            <View>
                <FlatList
                    data={this.props.comments}
                    renderItem={({ item }) => <SingleComment key={item.id} comment={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: () => {
            dispatch({type: 'GET_COMMENTS_ATTEMPT'});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
