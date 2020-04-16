let nextId = 0;

//Action => Add a todo or remove a todo
export const addTodo = (item) => {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        text: item,
    };
};
export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
});
export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
});
export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};
