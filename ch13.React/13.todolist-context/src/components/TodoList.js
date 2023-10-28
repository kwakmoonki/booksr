import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoList() {
  const todo = useContext(TodoContext);

  return (
    <div className="list-group">
      {todo.list.map((item, index) => {
        return (
          <a
            href="#"
            key={index}
            className="list-group-item list-group-item-action"
            onClick={(event) => todo.removeList(event, index)}
          >
            {item}
          </a>
        );
      })}
    </div>
  );
}

export default TodoList;
