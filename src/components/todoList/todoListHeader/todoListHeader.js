import React from 'react';
import styles from './todoListHead.module.css'
import {Formik, Field, Form} from 'formik';

const validateAddTodo = (value) => {
    let error;
    if (!value) {
        error = 'Поле не может быть пустым';
    }

    return error;
}

const TodoListHeader = (props) => {

    return <div className={styles.header}>
        <span>Мой лист задач</span>
        <Formik
            initialValues={{
                todoName: '',
            }}
            onSubmit={(values, {resetForm}) => {
                props.onAddNewTodo(values.todoName)
                resetForm()
            }}
        >
            {({errors, touched, isValidating}) => (
                <Form>
                    <Field id="todoName" name="todoName" placeholder="Введите название задачи"
                           validate={validateAddTodo}/>
                    <button type="submit">Добавить</button>
                    {errors.todoName && touched.todoName && <div className={styles.errorMessage}>{errors.todoName}</div>}
                </Form>
            )}
        </Formik>
    </div>
}
export default React.memo(TodoListHeader)