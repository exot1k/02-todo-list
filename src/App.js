import './App.css';
import TodoList from "./components/todoList/todoList";
import {connect} from "react-redux";
import {onAddNewTodo, onChangeDone, onDelTodo} from "./Redux/todoListReducer";

function App(props) {
    return (
        <div className="App">
            <TodoList todoData={props.todoData} onAddNewTodo={props.onAddNewTodo}
                      onChangeDone={props.onChangeDone}
                      onDelTodo={props.onDelTodo}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        todoData: state.todoList.todoData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewTodo: (todoName) => {
            dispatch(onAddNewTodo(todoName));
        },
        onChangeDone: (id) => {
            dispatch(onChangeDone(id));
        },
        onDelTodo: (id) => {
            dispatch(onDelTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
