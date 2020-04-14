export const userLoginAction = (payload) => ({
    type: 'USER_LOGIN',
    payload,
});
export const userRegisterAction = (payload) => ({
    type: 'USER_REGISTER',
    payload: payload,
});
export const getPostsAction = (payload) => ({
    type: 'GET_POSTS',
    payload: payload,
});
