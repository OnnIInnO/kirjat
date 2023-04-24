import kivoja from "./images/kirjat-kivoja.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kivoja} className="App-kivoja" alt="kirjatonkivoja" />
        <p>Kirjat on kivoja jeejee</p>
      </header>
    </div>
  );
}

export default App;
