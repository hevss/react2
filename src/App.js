import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to your API endpoint (in this case, localhost:9000/doador)
    axios.get('http://localhost:9000/doador')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MeuTitulo />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.cidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

function MeuTitulo() {
  return (
    <h1>Meu Projeto</h1>
  );
}

export default App;
