import { useState } from "react";
import { ListState } from "../Context";
import "./Sidebar.css";

const Sidebar = () => {
  // const listContext = useContext(todoContext);
  const { todoList, setTodoList } = ListState();

  const formDefault = {
    title: "",
    description: "",
  };
  // const [list, setList] = useState([]);
  const [formData, setFormData] = useState(formDefault);

  const addToList = (event) => {
    event.preventDefault();
    console.log(
      `Form: ${JSON.stringify(formData)}\nList: ${JSON.stringify(todoList)}`
    );
    if (todoList.filter((l) => l.title === formData.title).length > 0) {
      console.log("already exist");
    } else if (formData.title.length < 1) {
      console.log("required field");
    } else {
      setTodoList([...todoList, formData]);
      // setTodoList({...todoList, formData});
    }
    // setTodoList([...todoList, formData]);
    console.table(todoList);
  };

  const collectForm = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className="formdata">
      <label>Title</label>
      <input
        autoFocus={true}
        onChange={collectForm}
        type="text"
        className="title"
        name="title"
        value={formData.title}
      />
      <br />
      <label>Description</label>
      <textarea
        onChange={collectForm}
        className="details"
        rows="6"
        name="description"
        value={formData.description}
      />
      <br />
      <button onClick={addToList}>Add</button>
    </form>
  );
};

export default Sidebar;
