import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const todoContext = createContext();

function Context({ children }) {
  // const [todoList, setTodoList] = useState([{title:'hello',description:'Hi'}]);
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const fetchList = async function (){
      const list = await axios.get("http://127.0.0.1:4001/api/v1/readAll");
      console.log(list.data.list);
      console.log(list.data);
      setTodoList(list.data.list);
    }
    fetchList();
  }, [])
  
  return (
    <todoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </todoContext.Provider>
  );
}

export default Context;

export const ListState = () => {
  return useContext(todoContext);
};
