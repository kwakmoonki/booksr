import React from "react";

function TodoList(props) {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action"
      onClick={props.onClick}
    >
      {props.item}
    </a>
  );
}

export default TodoList;
