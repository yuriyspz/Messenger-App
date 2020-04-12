export default function login(state = [], action) {
    if (action.type === "USER_LOGIN") {
        return action.payload
    }
    return state;
}
