import "./App.css";

function App() {
  return (
    <div>
      <h1 className="heading">Type your heart out!</h1>
      <form action="#">
        <textarea name="text" id="inputText" cols="30" rows="10" autoFocus></textarea>
      </form>
      <footer>
        Developed By <a href="https://github.com/AnshKaushal"> Ansh Kaushal.</a>
      </footer>
    </div>
  );
}

export default App;