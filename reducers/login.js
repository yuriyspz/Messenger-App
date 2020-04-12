export default function login(state = [], action) {
    if (action.type === "USER_LOGIN") {
        return action.payload
    }
    if (action.type === "USER_REGISTER") {
        return [...state,
            action.payload]
    }
    return state;
}
