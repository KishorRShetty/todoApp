import { ListState } from "../Context";
import "./Content.css";

const Content = () => {
  const { todoList } = ListState();
  console.log("content: " + JSON.stringify(todoList));
  return todoList.length > 0 ? (
    // <ul>
    //   {todoList.map((e) => (
    //     <li key={e.title}>{e.title}</li>
    //   ))}
    // </ul>
    <div className="list">
      {todoList.map((e) => (
        <fieldset className="fset" key={e.title}>
          <legend>{e.title}</legend>
          <p>{e.description}</p>
        </fieldset>
      ))}
    </div>
  ) : (
    <p>List is Empty</p>
  );
};

export default Content;
