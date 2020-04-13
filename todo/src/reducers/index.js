//starting off with...
const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
};

//reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, state.append(addTodo) };
        case 'REMOVE_TODO':
            return { ...state, state.remove(removeTodo) };
        default:
            return initialState;
    }
}
