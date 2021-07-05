import React, { useState, setState } from 'react';

const TodoForm = (props) => {
    console.log('TodoForm:', props.props);
    let [addInput, setAddInput] = useState('');

    const handleChanges = (e) => {
        setAddInput(e.target.value);
    };

    const newTodo = {
        item: addInput,
        completed: false,
        id: Date.now(),
    };
    console.log(addInput);
    // console.log(state);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <label htmlFor="add" name="add">
                Add a Todo:
            </label>
            <input
                type="text"
                name="add"
                value={addInput}
                onChange={handleChanges}
            />
            <button
                onClick={() => {
                    props.props.dispatch({
                        type: 'ADD_TODO',
                        payload: newTodo,
                    });
                }}
            >
                Add Todo
            </button>
            <button
                onClick={() => {
                    props.props.dispatch({ type: 'CLEAR_COMPLETED' });
                }}
            >
                Clear Completed
            </button>
            <br />
        </form>
    );
};
export default TodoForm;
