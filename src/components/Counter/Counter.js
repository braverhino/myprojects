import {useDispatch, useSelector} from "react-redux";
import './Counter.css'
import back from "../../img/arrow.png";
import {NavLink} from "react-router-dom";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const decrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    return (
        <div>
            <NavLink to={'/'} className={'back-link'}>

                <button className={'back__btn'}>
                    <img src={back} width={'30px'} alt=""/>
                </button>

            </NavLink>

            <div style={{fontFamily: 'Courier, serif'}} className={'counterApp'}>
                <h1 >Counter App</h1>
                <p style={{fontSize: '20px', fontWeight: 'bolder'}}>{count}</p>
                <button className={'btn-success'} onClick={increment}>
                    +
                </button>

                <button className={'btn-danger'} onClick={decrement}>
                    -
                </button>


            </div>
        </div>

    )
}

export default Counter