import './App.css';
import React, { Component } from 'react';

class App extends Component {


  state = {
    todoList: []
  }

  handleSubmit = (event) => {
    var taskDesc = this.event.target.element.todoTask.value;
    if (taskDesc.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, taskDesc]
      })
      this.event.target.reset();
    }
    this.event.preventDefault();
  }




  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-1">Todo App</h1>
          </div>
        </div>

        <form onSubmit={
          this.handleSubmit
        }>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">🧑‍</span>
            </div>
            <input type="text" name="todoTask" className="form-control" autoComplete="off" placeholder="Enter your task"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="submit" >Add</button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {this.state.todoList.map((items, index) => {
            return <li className="list-group-item" key={index}>items</li>
          })}
        </ul>
      </div>
    );
  }
}


export default App;
