import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [dataDoador, setDataDoador] = useState([]);
  const [dataDoacao, setDataDoacao] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
    cpf: '',
    nascimento: '',
    cep: '',
    cidade: '',
    estado: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: ''
  });

  const [formDataDoacao, setFormDataDoacao] = useState({
    valor: '',
    user_sistema_id: '',
  });

  useEffect(() => {
    // Make an Axios GET request to your API endpoint (in this case, localhost:9000/doador)
    axios.get('http://localhost:9000/doador')
      .then((response) => {
        console.log(response.data);
        setDataDoador(response.data);
      })
      .catch((error) => {
        console.error('Error fetching doador data:', error);
      });

    // Make an Axios GET request to your API endpoint (in this case, localhost:9000/doacao)
    axios.get('http://localhost:9000/doacao')
      .then((response) => {
        console.log(response.data);
        setDataDoacao(response.data);
      })
      .catch((error) => {
        console.error('Error fetching doacao data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    axios.post('http://localhost:9000/doador', formData)
      .then((response) => {
        console.log('Doador adicionado com sucesso:', response.data);
        setFormData({
          nome: '',
          email: '',
          endereco: '',
          cpf: '',
          nascimento: '',
          cep: '',
          cidade: '',
          estado: '',
          bairro: '',
          rua: '',
          numero: '',
          complemento: ''
        });
        setDataDoador([...dataDoador, response.data]);
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  const handleDoacaoInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataDoacao({ ...formDataDoacao, [name]: value });
  };

  const submitDoacaoForm = () => {
    axios.post('http://localhost:9000/doacao', formDataDoacao)
      .then((response) => {
        console.log('Doação enviada com sucesso:', response.data);
        setFormDataDoacao({
          valor: '',
          user_sistema_id: ''
        });
        setDataDoacao([...dataDoacao, response.data]);
      })
      .catch((error) => {
        console.error('Erro ao enviar doação:', error);
        // Adicione esta linha para imprimir detalhes do erro no console
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <MeuTitulo />
        <form>
          <label>
            Nome:
            <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Cidade:
            <input type="text" name="cidade" value={formData.cidade} onChange={handleInputChange} />
          </label>
          <br />
          <button type="button" onClick={submitForm}>Adicionar Doador</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {dataDoador.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.cidade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <MeuTitulo2 />
        <form>
          <label>
            Valor:
            <input type="text" name="valor" value={formDataDoacao.valor} onChange={handleDoacaoInputChange} />
          </label>
          <br />
          <label>
            User Sistema ID:
            <input type="text" name="user_sistema_id" value={formDataDoacao.user_sistema_id} onChange={handleDoacaoInputChange} />
          </label>
          <br />
          <button type="button" onClick={submitDoacaoForm}>Adicionar Doação</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Valor</th>
              <th>User Sistema ID</th>
            </tr>
          </thead>
          <tbody>
            {dataDoacao.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.valor}</td>
                <td>{item.user_sistema_id}</td>
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
    <h1>Doadores</h1>
  );
}

function MeuTitulo2() {
  return (
    <h1>Doações</h1>
  );
}

export default App;
