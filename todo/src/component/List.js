import React, { setState } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

import { addTodo, toggleTodo } from '../actions';
import AddTodo from './AddTodo';
const List = (props) => {
    const state = {
        newTodo: '',
    };

    const addTodo = (e) => {
        e.preventDefault();
        props.addTodo(state.newTodo);
    };
    // const handleChanges = (e) => setState({ newTodo: e.target.value });
    let input;
    return (
        <div>
            <h2>Todo: </h2>
            {props.todoList.map((value) => (
                <ListItem
                    item={value.item}
                    key={value.id}
                    onClick={() => toggleTodo(value.id)}
                />
            ))}
            <AddTodo />
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    };
};
export default connect(mapStateToProps, { addTodo, toggleTodo })(List);
