import './Consultar.css';
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Cadastrar/index';

function Consultar() {
 const [cpf, setCpf] = useState('');
 const [userData, setUserData] = useState(null);
 const [error, setError] = useState(null);
 const [isEditing, setIsEditing] = useState(false);
 const [editData, setEditData] = useState({});
 const [removalError, setRemovalError] = useState(null);

 const handleSearch = () => {
  axios
   .get(`http://localhost:8080/buscarPorCPF/${cpf}`)
   .then((response) => {
    setUserData(response.data);
    setError(null);
    setIsEditing(false);
   })
   .catch((error) => {
    setUserData(null);
    setError('Erro ao buscar dados. Por favor, verifique o CPF e tente novamente');
   });
 };

 const handleEdit = () => {
  setIsEditing(true);
  setEditData({
   ...userData,
   nome: userData.nome || '',
   dataNascimento: userData.dataNascimento || '',
   cpf: userData.cpf || '',
   rg: userData.rg || '',
   matricula: userData.matricula || '',
   orgaoExpedidor: userData.orgaoExpedidor || '',
   nacionalidade: userData.nacionalidade || '',
   celular: userData.celular || '',
   email: userData.email || '',
   nomePai: userData.nomePai || '',
   nomeMae: userData.nomeMae || '',
   bairro: userData.bairro || '',
   cidade: userData.cidade || '',
   estado: userData.estado || '',
   turno: userData.turno || '',
  });
 };

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setEditData((prevData) => ({
   ...prevData,
   [name]: value || '',
  }));
 };

 const handleSave = () => {
  console.log('Dados enviados para atualização:', editData);

  axios
   .put(`http://localhost:8080/alterar/${editData.cpf}`, editData, {
    headers: {
     'Content-Type': 'application/json',
    },
   })
   .then((response) => {
    setUserData(response.data);
    setIsEditing(false);
    alert('Dados alterados com sucesso');
   })
   .catch((error) => {
    console.error('Erro ao alterar dados:', error);
    console.log('Detalhes do erro:', error.response.data);
    alert('Erro ao alterar dados');
   });
 };

 const remover = () => {
  const isConfirmed = window.confirm('Tem certeza que deseja remover este aluno?');

  if (isConfirmed) {
   axios
    .delete(`http://localhost:8080/remover/${userData.id}`)
    .then(() => {
     setUserData(null);
     alert('Aluno removido com sucesso');
    })
    .catch((error) => {
     console.error('Erro ao remover aluno:', error);
     alert('Erro ao remover aluno');
    });
  }
 };

 return (
  <div>
   <div className="consultarAlunos">
    <h1>Dados do aluno</h1>
    <input
     autoComplete="off"
     type="text"
     value={cpf}
     onChange={(e) => setCpf(e.target.value)}
     placeholder="Digite o CPF do aluno"
     style={{ width: '200px' }}
    />
    <div className="consultarBotoes">
     <button onClick={handleSearch} className="btnBuscar">
      Buscar
     </button>
     {userData && (
      <>
       <button onClick={handleEdit} className="btnBuscar">
        Editar
       </button>
       <button onClick={remover} className="btnBuscar">
        Remover
       </button>
      </>
     )}
    </div>
   </div>
   <div>
    {error && <p>{error}</p>}
    {removalError && <p>{removalError}</p>}
    {userData && !isEditing && (
     <div>
      <div className="alunoInfomacoes">
       <p className="informacoesDoAluno">
        Nome: <span className="color-result">{userData.nome}</span>
       </p>
       <p className="informacoesDoAluno">
        Data de Nascimento:
        <span className="color-result">{userData.dataNascimento}</span>
       </p>
       <p className="informacoesDoAluno">
        CPF: <span className="color-result">{userData.cpf}</span>
       </p>
       <p className="informacoesDoAluno">
        RG: <span className="color-result">{userData.rg}</span>
       </p>
       <p className="informacoesDoAluno">
        Matrícula: <span className="color-result">{userData.matricula}</span>
       </p>
       <p className="informacoesDoAluno">
        Órgão Expedidor:
        <span className="color-result">{userData.orgaoExpedidor}</span>
       </p>
       <p className="informacoesDoAluno">
        Nacionalidade:
        <span className="color-result">{userData.nacionalidade}</span>
       </p>
       <p className="informacoesDoAluno">
        Celular: <span className="color-result">{userData.celular}</span>
       </p>
       <p className="informacoesDoAluno">
        E-mail: <span className="color-result">{userData.email}</span>
       </p>
       <p className="informacoesDoAluno">
        Nome do Pai: <span className="color-result">{userData.nomePai}</span>
       </p>
       <p className="informacoesDoAluno">
        Nome da Mãe: <span className="color-result">{userData.nomeMae}</span>
       </p>
       <p className="informacoesDoAluno">
        Bairro: <span className="color-result">{userData.bairro}</span>
       </p>
       <p className="informacoesDoAluno">
        Cidade: <span className="color-result">{userData.cidade}</span>
       </p>
       <p className="informacoesDoAluno">
        Estado: <span className="color-result">{userData.estado}</span>
       </p>
       <p className="informacoesDoAluno">
        Turno: <span className="color-result">{userData.turno}</span>
       </p>
      </div>
     </div>
    )}
    {isEditing && (
     <div className="editarAluno">
      <h2>Editar Dados do Aluno</h2>
      <form>
       <label>
        Nome:
        <input
         autoComplete="off"
         type="text"
         name="nome"
         value={editData.nome || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Data de Nascimento:
        <input
         autoComplete="off"
         type="date"
         name="dataNascimento"
         value={editData.dataNascimento || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        CPF:
        <input
         autoComplete="off"
         type="text"
         name="cpf"
         value={editData.cpf || ''}
         onChange={handleInputChange}
         readOnly
        />
       </label>
       <label>
        RG:
        <input
         autoComplete="off"
         type="text"
         name="rg"
         value={editData.rg || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Matrícula:
        <input
         autoComplete="off"
         type="text"
         name="matricula"
         value={editData.matricula || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Órgão Expedidor:
        <input
         autoComplete="off"
         type="text"
         name="orgaoExpedidor"
         value={editData.orgaoExpedidor || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Nacionalidade:
        <input
         autoComplete="off"
         type="text"
         name="nacionalidade"
         value={editData.nacionalidade || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Celular:
        <input
         autoComplete="off"
         type="text"
         name="celular"
         value={editData.celular || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        E-mail:
        <input
         autoComplete="off"
         type="email"
         name="email"
         value={editData.email || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Nome do Pai:
        <input
         autoComplete="off"
         type="text"
         name="nomePai"
         value={editData.nomePai || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Nome da Mãe:
        <input
         autoComplete="off"
         type="text"
         name="nomeMae"
         value={editData.nomeMae || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Bairro:
        <input
         autoComplete="off"
         type="text"
         name="bairro"
         value={editData.bairro || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Cidade:
        <input
         autoComplete="off"
         type="text"
         name="cidade"
         value={editData.cidade || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Estado:
        <input
         autoComplete="off"
         type="text"
         name="estado"
         value={editData.estado || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Turno:
        <input
         autoComplete="off"
         type="text"
         name="turno"
         value={editData.turno || ''}
         onChange={handleInputChange}
        />
       </label>
       <label>
        Ocorrencia:
        <input
         autoComplete="off"
         type="text"
         name="ocorrencia"
         value={editData.ocorrencia || ''}
         onChange={handleInputChange}
        />
       </label>
      </form>
      <button onClick={handleSave} className="btnSalvar">
       Salvar
      </button>
     </div>
    )}
   </div>
   {userData && (
    <div className="ocorrenciasDoAluno">
     <h1>Ocorrências do aluno</h1>
     <table className="table">
      <thead>
       <tr>
        <th>Ocorrências</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         <span className="color-ocorrencia">{userData.ocorrencia}</span>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   )}
  </div>
 );
}

export default Consultar;
