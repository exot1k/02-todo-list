import React from 'react';
import styles from './todoListHead.module.css'
import {Formik, Field, Form} from 'formik';

const TodoListHeader = (props) => {

    return <div className={styles.header}>
        <span>Мой лист задач</span>
        <Formik
            initialValues={{
                todoName: '',
            }}
            onSubmit={(values) => {
                props.onAddNewTodo(values.todoName)
            }}
        >
            <Form>
                <Field id="todoName" name="todoName" placeholder="Введите название задачи" />
                <button type="submit">Добавить</button>
            </Form>
        </Formik>
    </div>
}
export  default React.memo(TodoListHeader)