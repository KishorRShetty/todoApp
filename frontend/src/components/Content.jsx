import { ListState } from "../Context";
import "./Content.css";

import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { TbMinusVertical } from "react-icons/tb";
import axios from "axios";

const Content = () => {
  const { todoList, setTodoList } = ListState();
  // console.log("content: " + JSON.stringify(todoList));

  async function deleteItem(id) {
    const delList = await axios.delete(
      `http://127.0.0.1:4001/api/v1/readOne/${id}`
    );
    if (!delList) return;
    console.log(delList.status);
    await setTodoList(todoList.filter((p) => p._id !== id));
    console.log(todoList);
    console.log("list" + JSON.stringify(todoList.map((a) => a._id)));
  }

  return todoList.length > 0 ? (
    <div className="list">
      {todoList.map((e) => (
        <fieldset className="fset" key={e._id}>
          <legend>
            <BiEditAlt className="edit" />
            <AiOutlineDelete
              onClick={() => deleteItem(e._id)}
              className="delete"
            />
            <TbMinusVertical />
            <span className="ltitle">{e.title}</span>
          </legend>
          <p>{e.description}</p>
        </fieldset>
      ))}
    </div>
  ) : (
    <p>List is Empty</p>
  );
};

export default Content;
