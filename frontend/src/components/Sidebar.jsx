import axios from "axios";
import { ListState } from "../Context";
import "./Sidebar.css";

const Sidebar = () => {
  // const listContext = useContext(todoContext);
  const { todoList, setTodoList, formData, setFormData } = ListState();

  // const formDefault = {
  //   title: "",
  //   description: "",
  // };
  // const [list, setList] = useState([]);
  // const [formData, setFormData] = useState(formDefault);

  const addToList = async (event) => {
    event.preventDefault();
    console.log(
      `Form: ${JSON.stringify(formData)}\nList: ${JSON.stringify(todoList)}`
    );
    if (todoList.filter((l) => l.title === formData.title).length > 0) {
      console.log("already exist");
      return;
    } else if (formData.title.length < 1) {
      console.log("required field");
      return;
    } else {
      await axios
        .post(`http://127.0.0.1:4001/api/v1/add`, { ...formData })
        .then(function (response) {
          setTodoList([
            ...todoList,
            { _id: response.data.list._id, ...formData },
          ]);
          console.log("responseId: " + response.data.list._id);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          console.log("Failed to Add");
        });
    }
    console.log(todoList);
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
