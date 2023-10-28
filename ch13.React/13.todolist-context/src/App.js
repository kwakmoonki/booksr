import React, { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import { TodoContext } from "./components/TodoContext";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addList = () => {
    setTodoList([...todoList, todoInput]);
    setTodoInput("");
  };

  const removeList = (event, key) => {
    console.log("removeList", key);
    event.preventDefault();
    setTodoList(todoList.filter((list, removeKey) => removeKey !== key));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 mt-3">
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

          <TodoContext.Provider
            value={{
              list: todoList,
              removeList: removeList
            }}
          >
            <TodoContainer />
          </TodoContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
