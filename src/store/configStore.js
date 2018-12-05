import { createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';
export default function configStore(state) {
    return createStore(
        RootReducer,
        state,
    )
}