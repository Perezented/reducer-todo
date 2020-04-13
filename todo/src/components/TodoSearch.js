import React from 'react';

const AddTodo = () => {
    let input;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input type="text" ref={(el) => (input = el)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};
export default AddTodo;
