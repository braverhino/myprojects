import './TodoList.css'
import {useDispatch, useSelector} from "react-redux";
import TodoList from "./TodoList";

const TodoItem = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    if (!todos || !todos.length) {
        return <p style={{color: '#fff', marginTop: '150px', fontFamily: 'monospace'}}>Add Todo</p>
    }
    const handle = {
        handleClose: (id) => dispatch({
            type: 'REMOVE_TODO',
            payload: id
        }),
        handleTodo: (id) => dispatch({
            type: 'SWITCH_TODO',
            payload: id
        }),
        handleSolve: (id, label) => {
            dispatch({
                type: 'SOLVE_TODO',
                payload: id
            })
            alert("Congratulations!!!\nYou have completed todo: " + label)
        }
    }


    return (
        <div>
            {todos.map(todo => <TodoList handle={handle} todo={todo}/>)}
        </div>
    )
}
export default TodoItem