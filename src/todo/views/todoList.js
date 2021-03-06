import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';


class TodoList extends Component{

  render(){
    const todos = this.props.todos;
    return(
       <ul className="todo-list">
          {
            todos.map((item) => (
              <TodoItem
                key={item.id}
                text={item.text}
                completed={item.completed}
                onToggle={() => this.props.onToggleTodo(item.id)}
                onRemove={() => this.props.onRemoveTodo(item.id)}
              />
              ))
          }
          </ul>
      )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todo, state.filter)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);