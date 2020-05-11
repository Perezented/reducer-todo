import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducers/index';

const TodoForm = () => {
    const [addInput, setAddInput] = useState('');
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = (e) => {
        setAddInput(e.target.value);
    };
    console.log(addInput);
    console.log(state);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <label htmlFor="add" name="add">
                Add a Todo
            </label>
            <input
                type="text"
                name="add"
                value={addInput}
                onChange={handleChanges}
            />
            <button
                onClick={() => {
                    dispatch({ type: 'ADD_TODO', payload: '' });
                }}
            >
                Add Todo
            </button>
        </form>
    );
};
export default TodoForm;
