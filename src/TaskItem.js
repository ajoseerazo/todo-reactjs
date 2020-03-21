import React from "react";

class TaskItem extends React.Component {
  render() {
    const name = this.props.name;
    const done = this.props.done;
    const onChangeCheckbox = this.props.onClickCheckbox;

    return(
      <li>
        <span
          style={{
            textDecoration: done === true ? "line-through" : "none"
          }}
        >
          {name}
        </span>

        <input
          type="checkbox"
          checked={done}
          onChange={onChangeCheckbox}
        />
      </li>
    );
  }
}

export default TaskItem;
