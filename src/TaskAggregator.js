import React from "react";

class TaskAggregator extends React.Component {
  render() {
    const text = this.props.text;
    const onChange = this.props.onChangeText;
    const onClick = this.props.onClickAccept;

    return (
      <div className="input-box">
        <input
          type="text"
          placeholder="Agrega una tarea"
          value={text}
          onChange={onChange}
        />
        <button onClick={onClick}>Agregar</button>
      </div>
    );
  }
}

export default TaskAggregator;