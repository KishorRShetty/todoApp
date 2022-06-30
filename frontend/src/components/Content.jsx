import { ListState } from "../Context";
import "./Content.css";

import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { TbMinusVertical } from "react-icons/tb";
import axios from "axios";

const Content = () => {
  const { todoList, setTodoList } = ListState();
  // console.log("content: " + JSON.stringify(todoList));

  function deleteItem(id) {
    const fetchList = async function () {
      const delList = await axios.delete(`http://127.0.0.1:4001/api/v1/readOne/${id}`);
      // // console.log(list.data.list);
      setTodoList(todoList.filter(p=>p.id!==id));
    };
    fetchList();
  }

  return todoList.length > 0 ? (
    <div className="list">
      {todoList.map((e) => (
        <fieldset className="fset" key={e.title}>
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
