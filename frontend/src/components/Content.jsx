import { useContext } from "react";
import { todoContext } from "../Context";
import "./Content.css";

const Content = () => {
  const listContext = useContext(todoContext);
  return <p>{listContext.todoList}</p>;
};

export default Content;
