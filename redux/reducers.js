import {combineReducers} from "redux";
import {RECEIVE_PLAYGROUNDS, CREATE_PLAYGROUND} from "./actions";

const defaultState = { playgrounds: [], user: {} };

const playgroundReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PLAYGROUNDS:
            return action.payload;
        case CREATE_PLAYGROUND:
            return [...state, action.payload];
        default:
            return state;
    }
};

const userReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const reducers = combineReducers({
    playgrounds: playgroundReducer,
    user: userReducer
});

export default reducers;