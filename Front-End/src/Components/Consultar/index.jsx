import './Consultar.css'
import React, { useState } from 'react';
import axios from 'axios';

function Consultar() {
  const [cpf, setCpf] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    axios.get(`http://localhost:8080/buscarPorCPF/${cpf}`)
      .then(response => {
        setUserData(response.data);
        setError(null);
      })
      .catch(error => {
        setUserData(null);
        setError('Erro ao buscar dados. Por favor, verifique o cpf e tente novamente');
      });
  };

  return (
    <div>
      <div className='consultarAlunos'>
      <h1>Dados do aluno</h1>
      <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite o CPF do aluno" style={{width: "200px"}}/>
      <button onClick={handleSearch} className='btnBuscar'>Buscar</button>
      </div>
      <div>
        {error && <p>{error}</p>}
        {userData && (
          <div>
            <div className='alunoInfomacoes'>
            <p className='informacoesDoAluno'>Nome: <span className='color-result'>{userData.nome}</span></p>
            <p className='informacoesDoAluno'>Data de Nascimento: <span className='color-result'>{userData.dataNascimento}</span></p>
            <p className='informacoesDoAluno'>Cpf: <span className='color-result'>{userData.cpf}</span></p>
            <p className='informacoesDoAluno'>RG: <span className='color-result'>{userData.rg}</span></p>
            <p className='informacoesDoAluno'>Matrícula: <span className='color-result'>{userData.matricula}</span></p>
            <p className='informacoesDoAluno'>Órgão Expedidor: <span className='color-result'>{userData.orgaoExpedidor}</span></p>
            <p className='informacoesDoAluno'>Nacionalidade: <span className='color-result'>{userData.nacionalidade}</span></p>
            <p className='informacoesDoAluno'>Celular: <span className='color-result'>{userData.celular}</span></p>
            <p className='informacoesDoAluno'>E-mail: <span className='color-result'>{userData.email}</span></p>
            <p className='informacoesDoAluno'>Nome do Pai: <span className='color-result'>{userData.nomePai}</span></p>
            <p className='informacoesDoAluno'>Nome da Mãe: <span className='color-result'>{userData.nomeMae}</span></p>
            <p className='informacoesDoAluno'>Bairro: <span className='color-result'>{userData.bairro}</span></p>
            <p className='informacoesDoAluno'>Cidade: <span className='color-result'>{userData.cidade}</span></p>
            <p className='informacoesDoAluno'>Estado: <span className='color-result'>{userData.estado}</span></p>
            <p className='informacoesDoAluno'>Turno: <span className='color-result'>{userData.turno}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Consultar;
