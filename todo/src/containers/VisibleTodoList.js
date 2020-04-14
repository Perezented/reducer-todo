import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilter } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter((todos) => todos.completed);
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter((todos) => !todos.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilters),
});
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
