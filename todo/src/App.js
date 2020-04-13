import React from 'react';
import './App.css';
import TodoSearch from './components/TodoSearch';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo React App</h1>
            </header>
            <TodoSearch />
        </div>
    );
}

export default App;
