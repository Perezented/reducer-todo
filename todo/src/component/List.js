import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const List = (props) => {
    return (
        <div>
            <h2>Todo: </h2>
            {props.todoList.map((value) => (
                <ListItem item={value.item} key={value.id} />
            ))}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    };
};
export default connect(mapStateToProps, {})(List);
