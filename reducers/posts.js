const initialState = {
    posts: []
};
export default function posts(state = initialState, action) {
    if (action.type === "GET_POSTS") {
        return {
            posts: action.payload
        }
    } else if (action.type === "CREATE_COMMENT") {
        console.log(action)
        return state.posts.map((post) => post.id === action.id ? {
                ...post,
                comment: post.comment.concat({
                    id: action.payload.id,
                    comment: action.payload.comment,
                    commentator: action.payload.commentator
                })
            } : post)
            // posts: state.posts.flatMap(post => {

            // if (post.id === action.id) {
            //     return {
            //         ...posts,
            //         comment: post.comment.concat(action.payload)
            //     };
            // } else {
            //     return message;
            // }
    }
    return state;
}
