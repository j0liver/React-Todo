import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
const todos = [
  {
    name: 'Clean room',
    id: 123,
    completed: false
  },
  {
    name: 'Clean Bathroom',
    id: 124,
    completed: false
  },
  {
    name: 'Workout',
    id: 1235,
    completed: false
  },
  {
    name: 'Talk to myself',
    id: 1246,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      Todos: todos
    }
  }

  addTodo = name => {
    const newItem ={
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      Todos: [...this.state.Todos, newItem]
    })
  }
  toggleCompleted = id => {
    this.setState({
      Todos: this.state.Todos.map(task => {
        if(task.id === id){
          return {
            ...task,
            completed: !task.completed
          }
        } else{
          return task;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      Todos: this.state.Todos.filter(todo => todo.completed !== true)
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  addTodo={this.addTodo}/>
        <TodoList 
          toggleCompleted={this.toggleCompleted}
          Todos={this.state.Todos}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
