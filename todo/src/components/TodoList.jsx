import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    console.log('yyyyyoooooooo kiiiiiddddd', props);
    return (
        <section className="section">
            <p>(Click on a todo to mark it complete.)</p>
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
                        <h2
                            style={{
                                textDecoration: todoItem.completed
                                    ? 'line-through'
                                    : 'none',
                            }}
                        >
                            {todoItem.item}
                        </h2>
                    </div>
                );
            })}
        </section>
    );
};
export default TodoList;
