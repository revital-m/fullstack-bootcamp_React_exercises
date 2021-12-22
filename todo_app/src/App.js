import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Inputs from "./components/Inputs/Inputs";

class App extends Component {
  state = {
    tasks: [],
  };

  handleCreate = (taskValue) => {
    const id = uuidv4();
    const newTask = {
      id,
      name: taskValue.create,
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  handleUpdate = (taskValue, taskID) => {
    const tasks = this.state.tasks;
    const taskToUpdate = tasks.find((task) => task.id === taskID);

    const editedTask = {
      ...taskToUpdate,
      name: taskValue.update,
    };

    this.setState({
      tasks: this.state.tasks.map((task) => {
        return task.id === taskID ? editedTask : task;
      }),
    });
  };

  handleDelete = (taskID) => {
    const filteredTasksList = this.state.tasks.filter((task) => {
      return task.id !== taskID;
    });
    this.setState({ tasks: filteredTasksList });
  };

  displayTasks = () => {
    return this.state.tasks.map((task) => {
      return (
        <div className="task" key={task.id}>
          <Inputs
            labelName={task.name}
            inputType="text"
            name="update"
            handleCallback={this.handleUpdate}
            id={task.id}
          />
          <button className="btn" onClick={() => this.handleDelete(task.id)}>
            delete
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {this.displayTasks()}
        <Inputs
          labelName="Creat a new task:"
          inputType="text"
          name="create"
          id=""
          handleCallback={this.handleCreate}
        />
      </div>
    );
  }
}

export default App;
