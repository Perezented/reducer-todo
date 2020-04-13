import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import './App.css';

const App = () => (
    <div className="App">
        <h1>Todo React App</h1>

        <section>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </section>
    </div>
);

export default App;
