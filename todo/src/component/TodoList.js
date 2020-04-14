// import React from 'react';

// class TodoList extends React.Component {
//     state = {
//         newTodo: '',
//     };
//     addTodo = (e) => {
//         e.preventDefault();
//         this.props.addTodo(this.state.newTodo);
//     };
//     handleChanges = (e) => this.setState({ newTodo: e.target.value });

//     render() {
//         return (
//             <section>
//                 <div>
//                     <h2>Todo: </h2>
//                     {console.log(this.props)}
//                 </div>
//                 <div>
//                     <input
//                         onChange={this.handleChanges}
//                         value={this.state.newTodo}
//                     />
//                     <button onClick={this.addTodo}>Add Todo</button>
//                 </div>
//             </section>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         todoList: state.todoList,
//     };
// };

// export default connect(mapStateToProps, { addTodo })(TodoList);
