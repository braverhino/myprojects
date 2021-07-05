import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import TodoListApp from "./components/TodoListApp/TodoListApp";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";

function App() {

    return (
        <BrowserRouter>
            <div>
                <Route exact path={'/'} render={() => <Home />} />
                <Route exact path={'/todoapp'} render={() => <TodoListApp />} />
                <Route exact path={'/counter'} render={() => <Counter />} />

            </div>
        </BrowserRouter>


    );
}

export default App;
