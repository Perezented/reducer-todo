import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/index';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <section>
            <h3>This is the todoList area of the app</h3>
            <p>another line</p>
            <p>another line</p>
        </section>
    );
};
export default TodoList;
