import React, { serviceWorker, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

//Store => Gloabalized State

//Action => Add a todo or remove a todo
const addTodo = () => {
    return {
        type: 'ADD_TODO',
    };
};
const removeTodo = () => {
    return { type: 'REMOVE_TODO' };
};
//Reducer
const todoStuff = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.append(addTodo);
        case 'REMOVE_TODO':
            return state.remove(removeTodo);
    }
};

let store = createStore(todoStuff);

//Console display
store.subscribe(() => console.log(store.getState()));
//Dispatch
store.dispatch(addTodo);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
