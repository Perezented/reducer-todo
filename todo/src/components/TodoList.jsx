import React from 'react';

const TodoList = (props) => {
    console.log('yyyyyoooooooo kiiiiiddddd', props);
    return (
        <section>
            {props.state.todos.map((todoItem) => {
                return (
                    <div
                        key={todoItem.id}
                        onClick={() => {
                            props.dispatch({
                                type: 'TOGGLE_TODO',
                                payload: todoItem.id,
                            });
                        }}
                    >
                        <h2>{todoItem.item}</h2>
                    </div>
                );
            })}
        </section>
    );
};
export default TodoList;
