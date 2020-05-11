import React, { useState } from 'react';

export const newTodo = {
    item: 'testItem',
    completed: false,
    id: Date.now(),
};

const TodoForm = () => {
    const [addInput, setAddInput] = useState('');
    const handleChanges = (e) => {
        setAddInput(e.target.value);
    };
    return (
        <form>
            <label htmlFor="add" name="add">
                Add a Todo
            </label>
            <input
                type="text"
                name="add"
                value={addInput}
                onChange={handleChanges}
            />
            <button>Add Todo</button>
        </form>
    );
};
export default TodoForm;
