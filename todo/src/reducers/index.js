export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
    },
];

const newTodo = {
    item: 'testItem',
    completed: false,
    id: Date.now(),
};
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                newTodo,
            };
        default:
            return state;
    }
};
