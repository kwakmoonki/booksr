import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addList = () => {
    setTodoList([...todoList, todoInput]);
    setTodoInput("");
  };
  const removeList = (event, key) => {
    event.preventDefault();
    setTodoList(todoList.filter((list, removeKey) => removeKey !== key));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="alert alert-dark" role="alert">
            <h2>오늘 할 일(Todo List)</h2>
          </div>
          <input
            type="search"
            className="form-control my-3"
            value={todoInput}
            placeholder="할 일 입력 후 엔터"
            onChange={(event) => setTodoInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                addList();
              }
            }}
          />
          <div className="list-group">
            {todoList.map((item, index) => {
              return (
                <TodoList
                  key={index}
                  onClick={(event) => removeList(event, index)}
                  item={item}
                ></TodoList>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
