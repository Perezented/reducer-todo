export const ADD_TODO = 'ADD_TODO';
let nexTodoId = 1;
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    };
};
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nexTodoId++,
    text,
});
