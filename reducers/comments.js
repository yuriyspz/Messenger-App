const initialState = {
    comments: []
};
export default function comments(state = initialState, action) {
    if (action.type === "GET_COMMENTS") {
        return {
            comments: action.payload
        }
    }

    return state;
}
