import React from 'react';
import './App.css';
import TodoSearch from './containers/TodoSearch';
import Footer from './components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo React App</h1>
            </header>
            <section>
                <TodoSearch />
                <VisibleTodoList />
                <Footer />
            </section>
        </div>
    );
}

export default App;
