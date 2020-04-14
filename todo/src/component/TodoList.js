import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducer/index';

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <button
                    type="submit"
                    onClick={() => dispatch({ type: 'ADD_TODO' })}
                >
                    Add Todo
                </button>
            </form>
            <ul>{state.item}</ul>
        </>
    );
}
export default TodoList;
