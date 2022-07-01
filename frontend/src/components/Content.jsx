import { ListState } from "../Context";
import "./Content.css";

import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { TbMinusVertical } from "react-icons/tb";
import axios from "axios";

const Content = () => {
  const { todoList, setTodoList, setFormData, setEditMode, formDefault } =
    ListState();
  // console.log("content: " + JSON.stringify(todoList));

  async function deleteItem(id) {
    const delList = await axios.delete(
      `http://127.0.0.1:4001/api/v1/readOne/${id}`
    );
    if (!delList) return;
    console.log(delList.status);
    await setTodoList(todoList.filter((p) => p._id !== id));
    setFormData(formDefault);
    console.log(todoList);
    console.log("list" + JSON.stringify(todoList.map((a) => a._id)));
  }

  async function editItem(id) {
    await axios
      .get(`http://127.0.0.1:4001/api/v1/readOne/${id}`)
      .then(function (response) {
        setFormData(response.data.oneItem);
        setEditMode(true);
        console.log("responseId: " + response.data.oneItem._id);
        console.log(response.data.oneItem);
      })
      .catch(function (error) {
        console.log(error);
        console.log("Failed to Update");
      });
  }

  return todoList.length > 0 ? (
    <div className="list">
      {todoList.map((e) => (
        <fieldset className="fset" key={e._id}>
          <legend>
            <BiEditAlt onClick={() => editItem(e._id)} className="edit" />
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
