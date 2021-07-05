import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { todoReducer, initialState } from './reducers/index';
import axios from 'axios';

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    //API KEY 563492ad6f9170000100000148ee5444e5c04df6a3ad80877b11d6ba

    return (
        <div className="App">
            <TodoHeader state={state} dispatch={dispatch} />
            <TodoList state={state} dispatch={dispatch} />
        </div>
    );
}

export default App;
