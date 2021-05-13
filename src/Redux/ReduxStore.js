import {combineReducers, createStore} from "redux";
import {todoListReducer} from "./todoListReducer"

const reducers = combineReducers({
    todoList: todoListReducer
})

const store = createStore(reducers)

export default store;

window.store = store;