import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/index';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);
    return (
        <section>
            {state.map((todoItem) => {
                return (
                    <>
                        <div>
                            <h2>{todoItem.item}</h2>
                        </div>
                    </>
                );
            })}
        </section>
    );
};
export default TodoList;
