import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, item }) => (
    <h5
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {item}
    </h5>
);
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    item: PropTypes.string.isRequired,
};
export default Todo;
