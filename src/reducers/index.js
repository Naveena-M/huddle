import { combineReducers } from 'redux';
import comments from './commentsReducer';
const RootReducer = combineReducers({
    comments,
});

export default RootReducer;