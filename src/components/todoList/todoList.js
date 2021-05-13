import React from 'react';
import TodoListHeader from "./todoListHeader/todoListHeader";

import TodoListBody from "./todoListBody/todoListBody";

const TodoListMain = (props) => {

    return <div>
        <TodoListHeader onAddNewTodo={props.onAddNewTodo}/>
        <TodoListBody todoData={props.todoData} onChangeDone={props.onChangeDone}/>
    </div>
}

export default TodoListMain;