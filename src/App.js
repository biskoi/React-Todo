import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Get MVP',
    id: 0,
    completed: false
  },
  {
    task: 'Get stretch',
    id: 1,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {

    super();
    this.state = {
      tasks: tasks
    }
    console.log('app state', this.state);
  }

  toggleCompleted = (taskID) => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === taskID) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
    console.log('toggled', taskID);
    console.log(this.state.tasks);
  }

  addTask = item => {
    let newTask = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask = {this.addTask} clearCompleted = {this.clearCompleted}/>
        <TodoList tasks = {this.state.tasks} toggleCompleted = {this.toggleCompleted}/>
      </div>
    );
  }


}

export default App;
