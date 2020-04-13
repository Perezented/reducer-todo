import React from 'react';
import './App.css';
import TodoSearch from './components/TodoSearch';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo React App</h1>
            </header>
            <section>
                <TodoSearch />
            </section>
        </div>
    );
}

export default App;
