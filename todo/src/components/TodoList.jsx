import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/index';

const TodoList = (props) => {
    console.log('yyyyyoooooooo kiiiiiddddd', props);
    return (
        <section>
            {props.state.todos.map((todoItem) => {
                return (
                    <div key={todoItem.id}>
                        <h2>{todoItem.item}</h2>
                    </div>
                );
            })}
        </section>
    );
};
export default TodoList;
