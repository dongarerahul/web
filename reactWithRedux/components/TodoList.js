import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'

export default class TodoList extends Component {
  propTypes: {
    todos: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <ul>
        { this.props.todos.map(todo =>
            <Todo key = {todo.id} {...todo} />
        )}
      </ul>
    )
  }
}
