import plus from "../../../img/add-removebg-preview.png";
import './AddTodo.css'
import {useDispatch} from "react-redux";
import {useState} from "react";

const AddTodo = (props) => {
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('')
    const handleSubmit = (e) => e.preventDefault()
    const handleChange = e => setUserInput(e.target.value)
    const handleClick = () => {
        if (userInput) {
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    id: Math.random().toString(36).substr(2, 9),
                    label: userInput,
                    complete: false
                }
            })
            setUserInput('')
        }
    }

    return (
        <form onSubmit={handleSubmit} id="float-label">
            <input value={userInput} onChange={handleChange} type="text"/>
            <button className="addTask__btn" onClick={handleClick}>
                <img src={plus} width="40px" alt="add"/>
            </button>
        </form>
    )
}

export default AddTodo