import React from 'react';
import './App.css';

// import List from './components/List';

//initialState

const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
    },
];

//Reducer

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    item: action.text,
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
const [todos, dispatch] = React.useReducer(todoReducer, initialState);

//Adding a todo

let nextId = 0;
const addTodo = (item) => {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        text: item,
    };
};
//Toggle a todo when clicked

const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
});

//The actual todo item

const Todo = ({ onClick, completed, item }) => (
    <li
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {item}
    </li>
);

//The container for the todo items, the whole list

const TodoList = () => <ul>{console.log(initialState)}</ul>;

//The function to add a todo

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input ref={(node) => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

//everything rendered

function App() {
    return (
        <div className="App">
            <h1>React Todo List with useReducer</h1>
            {/* <List /> */}
            <AddTodo />
            <TodoList />
        </div>
    );
}

export default App;
