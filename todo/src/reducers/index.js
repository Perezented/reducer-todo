export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589,
        },
        {
            item: 'A second thing about reducers',
            completed: false,
            id: 38929875891,
        },
    ],
};

export const todoReducer = (state = initialState, action) => {
    console.log('todoReducer state:', state);
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload],
            };
        default:
            return state;
    }
};
