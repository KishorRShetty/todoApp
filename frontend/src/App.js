import './App.css';

function App() {
  return (
    <div className="App">
        <header><h1 className="App-link">Todo List</h1></header>
        <main className="main">
          <section className="sidebar">
            <form className="formdata">
              <label>Title</label>
              <input type="text" className="title"/>
              <br/>
              <label>Description</label>
              <textarea className="details" rows="6"/>
              <br/>
              <button>Add</button>
            </form>
          </section>
          <section className="content">
content
          </section>

        </main>
    </div>
  );
}

export default App;
