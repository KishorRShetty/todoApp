import axios from "axios";
import { ListState } from "../Context";
import "./Sidebar.css";

const Sidebar = () => {
  // const listContext = useContext(todoContext);
  const {
    todoList,
    setTodoList,
    formData,
    setFormData,
    editMode,
    setEditMode,
    formDefault,
  } = ListState();

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
          setTodoList([...todoList, response.data.list]);
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

  const updateList = async (event) => {
    event.preventDefault();
    alert(formData.title);
    if (todoList.filter((l) => l.title === formData.title).length > 0) {
      console.log("already exist");
      return;
    } else if (formData.title.length < 1) {
      console.log("required field");
      return;
    } else {
      await axios
        .put(`http://127.0.0.1:4001/api/v1/readOne/${formData._id}`, {
          ...formData,
        })
        .then(function (response) {
          //fetchALl again or update local object when no error ??
          // setTodoList([...todoList, response.data.isList]);
          setTodoList(
            [response.data.isList].concat(
              todoList.filter((f) => f._id !== formData._id)
            )
          );
          console.log("responseId: " + response.data.isList);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.message);
          console.log("Failed to Update");
        });
    }
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
      {editMode ? (
        <div style={{ display: "flex" }}>
          <button style={{ color: "tomato", flex: "2" }} onClick={updateList}>
            Update
          </button>
          <button
            onClick={() => {
              setEditMode(false);
              setFormData(formDefault);
            }}
          >
            Discard
          </button>
        </div>
      ) : (
        <button onClick={addToList}>Add</button>
      )}
    </form>
  );
};

export default Sidebar;
