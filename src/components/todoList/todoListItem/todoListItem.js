import React from 'react';
import styles from './todoListItem.module.css'
import cn from "classnames"

const TodoListItem = (props) => {

    const onClickTodo = () => {
        props.onChangeDone(props.id);
    }
    return <div>
        {/*{props.isDone && <img src={"https://img.icons8.com/metro/452/checkmark.png"}/>}*/}
        <p className={cn(styles.changeCross,{[styles.crossedOut]: props.isDone})} onClick={onClickTodo}>
            {props.todoName}</p>
    </div>
}

export default TodoListItem