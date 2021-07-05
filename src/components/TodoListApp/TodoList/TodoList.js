import tick from '../../../img/green-tick.png'
import close from '../../../img/close.svg'
import './TodoList.css'

const TodoList = (props) => {

    const handleTodo = () => props.handle.handleTodo(props.todo.id)
    const handleSolve = () => props.handle.handleSolve(props.todo.id, props.todo.label)
    const handleClose = () => props.handle.handleClose(props.todo.id)
    const label = props.todo.label
    const complete = props.todo.complete

    return (
        <div className="task-list__block">
            <div id={'task-list__message'} className={complete ? 'completed' : 'uncompleted'}>
                <span onClick={handleTodo} style={{cursor: "pointer"}}>{label}</span>
            </div>

            <div className="task-list__todoBlock">
                <div onClick={handleSolve} id={complete ? 'unhidden' : 'hidden'}>
                    <button className="todoBlock__solve">
                        <img src={tick} width={"30px"} alt=""/>
                    </button>
                </div>

                <div style={{width: '20px'}} onClick={handleClose}>
                    <button className="todoBlock__close">
                        <img src={close} alt=""/>
                    </button>
                </div>

            </div>
        </div>
    )
}


export default TodoList