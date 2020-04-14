export default function posts(state = [], action) {
    if (action.type === "GET_POSTS") {
        return [...state,
            action.payload]
    }
    return state;
}
