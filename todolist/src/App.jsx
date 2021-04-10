import './App.css';
import React, { Component } from 'react';

class App extends Component {

  handleSubmit = (event) => {
    var taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, taskDesc]
      })
      event.target.reset();
    }
    event.preventDefault();
  }

  deleteTodoTask = (event,index) => {
    var taskArray = [...this.state.todoList];
    taskArray.splice(index,1);
    this.setState({todoList: taskArray})
  }

  state = {
    todoList: []
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid py-2 jumbotron-align">
          <div className="container">
            <h1 className="display-1">Todo App</h1>
          </div>
        </div>

        <form onSubmit={
          this.handleSubmit
        }>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span class="input-group-text Shadow-Black" id="basic-addon1">🧑‍</span>
            </div>
            <input type="text" name="todoTask" className="form-control Shadow-Black" autoComplete="off" placeholder="Enter your task"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-dark Shadow-Black" type="submit" style={{fontWeight:"bold"}}>Add</button>
            </div>
          </div>
        </form>
        <ul className="list-group Shadow-Black">
          {this.state.todoList.map((items,index) =>{
            return <div className="card card-margin">
              <div className="card-body" key={index}>
                  <h5 className="card-title"> Task : {index+1}</h5>
                  <p className="card-text">{items}</p>
                  <button className="btn btn-block btn-outline-danger Shadow-Black" onClick={event => this.deleteTodoTask(event,index)}>Delete</button>
              </div>
            </div>
          })}
          {/* {this.state.todoList.map((items, index) => {
            return <li className="list-group-item list-group-item-action" key={index}>{items}
            <button className="btn btn-sm btn-outline-danger float-right Shadow-Black" onClick={event => this.deleteTodoTask(event,index)}>Delete</button>
            </li>
          })} */}
        </ul>
      </div>
    );
  }
}


export default App;
