import React from 'react';

import TodoForm from './TodoForm';
import styled from 'styled-components';

const HeaderSection = styled('section')`
    margin: 10vh 0 0;
`;

const TodoHeader = (state) => {
    console.log('ovvveeerrrr heeeerrreee', state);
    return (
        <HeaderSection>
            <h1>Welcome to a Reducer Todo App</h1>
            <TodoForm props={state} />
        </HeaderSection>
    );
};

export default TodoHeader;
