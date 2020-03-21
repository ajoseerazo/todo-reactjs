import React from "react";
import TaskItem from "./TaskItem";
import TaskAggregator from "./TaskAggregator";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    text: "",
    tasks: []
  };

  onChangeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  onClickAccept() {
    const tmpTask = this.state.tasks;

    tmpTask.push({
      name: this.state.text,
      done: false
    });

    this.setState({
      tasks: tmpTask,
      text: ""
    });
  }

  onClickCheckbox(name) {
    const tmpTask = this.state.tasks;

    const task = tmpTask.find(function(task) {
      return task.name === name;
    });

    task.done = !task.done;

    const tasksUpdated = [];
    for (let i = 0; i < tmpTask.length; i++) {
      if (tmpTask[i].name === task.name) {
        tasksUpdated.push(task);
      } else {
        tasksUpdated.push(tmpTask[i]);
      }
    }

    this.setState({
      tasks: tasksUpdated
    });
  }

  render() {
    return (
      <div className="App">
        <TaskAggregator
          text={this.state.text}
          onChangeText={this.onChangeText.bind(this)}
          onClickAccept={this.onClickAccept.bind(this)}
        />

        <h4>Lista de tareas</h4>

        <ul>
          {this.state.tasks.map(
            function(task, index) {
              return (
                <TaskItem
                  key={index}
                  name={task.name}
                  done={task.done}
                  onClickCheckbox={this.onClickCheckbox.bind(this, task.name)}
                />
              );
            }.bind(this)
          )}
        </ul>
      </div>
    );
  }
}

export default App;
