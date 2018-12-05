import { combineReducers } from 'redux';
const posts = (state = [], action) => {
    switch (action.type) {
        case 'STORE_ALLUSER_POSTS':
            return action.posts;
        default:
            return state;
    }
}
const RootReducer = combineReducers({
    posts,
});

export default RootReducer;