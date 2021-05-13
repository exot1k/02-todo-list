import React from 'react';
import TodoListItem from "../todoListItem/todoListItem";

const TodoListBody = (props) => {

    return <div>
        {props.todoData.map((el) =>
            <TodoListItem key={el.id}
                          todoName={el.todoName}
                          onChangeDone={props.onChangeDone}
                          id={el.id}
                          isDone={el.isDone}
                          onDelTodo={props.onDelTodo}
            />
        )}
    </div>
}

export default React.memo(TodoListBody)