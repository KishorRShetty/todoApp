import { useState } from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const formDefault = {
    title: "",
    description: "",
  };
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState(formDefault);

  const addToList = (event) => {
    event.preventDefault();
    console.log(
      `Form: ${JSON.stringify(formData)}\nList: ${JSON.stringify(list)}`
    );
    if (list.filter(l => l.title === formData.title).length>0) {
      console.log("already exist");
    } else {
      setList([...list, formData]);
    }
    console.table(list);
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
