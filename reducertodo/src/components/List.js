import React, { useState, useReducer } from 'react';
import { reducer, initalState } from '../reducers';
import { addTodo } from '../actions';
const List = () => {
    const [newTodo, setNewTodo] = useState();
    const [state, dispatch] = useReducer(reducer, initalState);
    // console.log(state.todoItem);
    const handleChanges = (e) => {
        newTodo(e.target.value);
    };

    return (
        <>
            <div>{console.log(setNewTodo)}</div>

            {
                /* <div>
                {state.initalState.map((value) => (
                    <h4 key={value.id}>{value.item}</h4>
                ))}
            </div>*/
                <section>
                    <input
                        type="text"
                        value={newTodo}
                        onChange={handleChanges}
                        placeholder="Add a todo item"
                    />
                    <button
                        onClick={() =>
                            dispatch({ type: 'ADD_TODO', payload: newTodo })
                        }
                    >
                        Add todo item
                    </button>
                </section>
            }
        </>
    );
};
export default List;
