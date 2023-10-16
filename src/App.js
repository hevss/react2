import logo from './logo.svg';
import './App.css';
let nome = 'Hevellyn';
let pessoas = [{"COD":"001","Nome":"Hevellyn"},{"COD":"002","Nome":"Julia"},{"COD":"003","Nome":"Letícia"}]

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function MeuTitulo() {
  return (
    <h1>Meu Projeto</h1>
  );
}

function Minhatabela() {
  return (
    <table>
    <tr>
      <td>COD</td>
      <td>Nome</td>
    </tr>
    <tr>
      <td>001</td>
      <td>Hevellyn</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Julia</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Letícia</td>
    </tr>
    </table>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuTitulo/>
        <Minhatabela/>
        <p>
          Edit <code>src/App.js</code> and save to reload. {nome}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />

      </header>
    </div>
  );
}

export default App;
