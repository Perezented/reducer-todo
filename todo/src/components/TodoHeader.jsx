import React from 'react';

import TodoForm from './TodoForm';

const TodoHeader = (state) => {
    console.log(state);
    return (
        <>
            <h1>Welcome to a Reducer Todo App</h1>
            <TodoForm props={state} />
        </>
    );
};

export default TodoHeader;
