import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { todoReducer, initialState } from './reducers/index';

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoHeader />
            <TodoList state={state} />
        </div>
    );
}

export default App;
