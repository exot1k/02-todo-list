const ADD_TODO = 'ADD_TODO'
const CHANGE_DONE = 'CHANGE_DONE'
const DELETE_TODO = 'DELETE_TODO'

const initialState = {
    todoData: [
        {id: 1, todoName: "Посетить зал", isDone: false},
        {id: 2, todoName: "Встретиться с джорджом", isDone: false},
        {id: 3, todoName: "Прочитать книгу", isDone: false},
        {id: 4, todoName: "Купить яйца", isDone: false}
    ]
}
const handlers = {
    [ADD_TODO]: (state, {todoName}) =>
        ({...state, todoData: [...state.todoData, {id: state.todoData.length + 1, todoName: todoName}]}),
    [CHANGE_DONE]: (state, {id}) => ({
        ...state, todoData: state.todoData.map(el => {
            return el.id === id ? {...el, isDone: !el.isDone} : el;
        })
    }),
    [DELETE_TODO]: (state, {id}) =>
        ({...state, todoData: state.todoData.filter( el => el.id != id )}),
    DEFAULT: state => state
}

export const todoListReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export const onAddNewTodo = (todoName) => ({type: ADD_TODO, todoName: todoName});
export const onChangeDone = (id) => ({type: CHANGE_DONE, id});
export const onDelTodo = (id) => ({type: DELETE_TODO, id});


