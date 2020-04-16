import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, item }) => (
    <li
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {item}
    </li>
);
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    item: PropTypes.string.isRequired,
};
export default Todo;
