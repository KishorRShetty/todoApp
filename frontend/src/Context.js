import { createContext, useState } from "react";

export const todoContext = createContext();

function Context({ children }) {
  const [todoList, setTodoList] = useState([]);

  return (
    <todoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </todoContext.Provider>
  );
}

export default Context;
