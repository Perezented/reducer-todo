import React, { setState } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

import { addTodo } from '../actions';

const List = (props) => {
    const state = {
        newTodo: '',
    };

    const addTodo = (e) => {
        e.preventDefault();
        props.addTodo(state.newTodo);
    };
    const handleChanges = (e) => setState({ newTodo: e.target.value });

    return (
        <div>
            <h2>Todo: </h2>
            {props.todoList.map((value) => (
                <ListItem item={value.item} key={value.id} />
            ))}
            <div>
                <input onChange={handleChanges} value={state.newTodo} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    };
};
export default connect(mapStateToProps, { addTodo })(List);
