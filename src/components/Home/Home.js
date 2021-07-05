import './Home.css'
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className={"homeComponent"}>
            <h1>My React projects</h1>
            <div className={'projects__block'}>

                <NavLink to={'/todoapp'} >
                    <button className={'projects-btn'}>Todo App</button>
                </NavLink>

                <NavLink to={'/counter'} >
                    <button className={'projects-btn'}>Counter</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Home