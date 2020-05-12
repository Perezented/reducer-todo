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
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.completed) {
                        return { ...(todo - todo.completed) };
                    } else return todo;
                }),
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        };
                    } else return todo;
                }),
            };
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload],
            };
        default:
            return state;
    }
};
