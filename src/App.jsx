import logo from '../src/assets/fatcart.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Nama : Jecky Chandra
        </h1>
        <div>
        <h3>Umur : 21</h3>
        <h3>Hobi : Bermain musik</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
