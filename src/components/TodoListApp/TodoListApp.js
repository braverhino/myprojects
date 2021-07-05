import './TodoListApp.css';
import Header from "./Header/Header";
import AddTodo from "./AddTodo/AddTodo";
import TodoItem from "./TodoList/TodoItem";
import {NavLink} from "react-router-dom";
import back from './../../img/arrow.png'

function TodoListApp() {
    return (
        <div>
            <NavLink to={'/'} className={'back-link'}>

                <button className={'back__btn'}>
                    <img src={back} width={'30px'} alt=""/>
                </button>

            </NavLink>


            <div className="todoApp">
                <Header/>
                <AddTodo/>
                <div className={"forTaskItem"}>
                    <TodoItem/>
                </div>

            </div>
        </div>

    );
}

export default TodoListApp;
