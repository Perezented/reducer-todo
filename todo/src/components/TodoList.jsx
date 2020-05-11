import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/index';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log('yyyyyoooooooo kiiiiiddddd', state);
    return (
        <section>
            {state.todos.map((todoItem) => {
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
