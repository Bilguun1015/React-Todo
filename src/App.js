import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';


const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      todoData: todoData,
    };
  }

  toggleItem = id => {
    console.log(id)
    this.setState({
      todoData: this.state.todoData.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoData: [...this.state.todoData, newTask]
    })
  }

  clearCompleted = () => {
    this.setState({
      todoData: this.state.todoData.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="myList"> 
        <div>
          <h2>My Todo List!</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <div>
          <TodoList 
          todoData={this.state.todoData} 
          toggleItem={this.toggleItem}
          clearCompleted = {this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
