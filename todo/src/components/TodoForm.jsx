import React, { useState } from 'react';

const TodoForm = (props) => {
    console.log('TodoForm:', props.props);
    const [addInput, setAddInput] = useState('');

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
                    props.props.dispatch({
                        type: 'ADD_TODO',
                        payload: newTodo,
                    });
                }}
            >
                Add Todo
            </button>
        </form>
    );
};
export default TodoForm;
