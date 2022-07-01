import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Snackbar from "./components/Snackbar";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-link">Todo List</h1>
      </header>
      <main className="main">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="content">
          <Content />
        </section>
      </main>
      <Snackbar />
    </div>
  );
}

export default App;
