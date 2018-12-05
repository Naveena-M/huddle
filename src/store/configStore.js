import { createStore } from 'redux';
import RootReducer from '../reducers';
export default function configStore(state) {
    return createStore(
        RootReducer,
        state,
    )
}