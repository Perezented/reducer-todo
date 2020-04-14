import ADD_TODO from '../actions';

export const initialState = {
    todoList: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589,
        },
    ],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};
