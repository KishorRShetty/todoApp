import { useContext } from "react";
import { todoContext } from "../Context";
import "./Content.css";

const Content = () => {
  const { todoList } = useContext(todoContext);
  return <p>{todoList.length > 0 ? todoList : "Empty List"}</p>;
};

export default Content;
