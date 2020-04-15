import { addTodo } from '../actions';
export const initalState = {
    todoItem: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589,
        },
    ],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':

        default:
            return state;
    }
};
