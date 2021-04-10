import './App.css';
import  React from 'react';
class App extends Component {

  state ={
    todoList:[]
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-1">Todo App</h1>
          </div>
        </div>

        <form onsubmit={handleSubmit} >
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

      </div>
    );
  }
}

handleSubmit = (event) => {
  var taskDesc = event.target.element.todoTask.value;
  if (taskDesc.length > 0) {
    this.setState({
      todoList:[...this.state.todoList, taskDesc]
    })
    event.target.reset();
  }
  event.preventDefault();

}
export default App;
