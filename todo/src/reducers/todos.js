//starting off with...
export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
};

//reducer function
// export function reducer(state = [], action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return { ...state, {
//                 id: action.id,
//                     text: action.text,
//                         completed: false,
//             } };
//         case 'REMOVE_TODO':
//             return { ...state.remove(removeTodo) };
//         default:
//             return initialState;
//     }
// }
const todos = (state = [], action) => {
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
export default todos;
