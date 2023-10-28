import React, { createContext } from "react";

export const TodoContext = createContext({
  list: "",
  removeList: () => {}
});
