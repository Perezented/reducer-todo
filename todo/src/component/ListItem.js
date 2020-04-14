import React from 'react';
import { toggleTodo } from '../actions/';
export default (item) => (
    <h4
        onClick={() => toggleTodo(item.id)}
        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
    >
        {item.item}
    </h4>
);
