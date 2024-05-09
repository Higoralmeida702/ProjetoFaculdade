import "./Cadastrar.css";
import { useState } from "react";
const Cadastrar = () => {

    const infoAluno = {
    id : '',
    nome :'',
    dataNascimento:'',
    cpf : '',
    rg : '',
    matricula : '',
    orgaoexpedido : '',
    nacionalidade : '',
    celular : '',
    email : '',
    nomePai : '',
    nomeMae : '',      
    bairro : '',
    cidade : '',
    estado : '',
    turno : ''
  }
  
  const [objAluno, setObjAluno] = useState(infoAluno);
  const [alunos, setAlunos] = useState ([]);
  
  const apenasNumeros = (e) => {
    const tecla = e.key;
    if (!/[0-9\b]/.test(tecla)) {
        e.preventDefault();
    }
}

  const limparFormulario = () => {
    setObjAluno(infoAluno);
  }
 
 const aoDigitar = (e) => {
  setObjAluno((prevObjAluno) => ({
      ...prevObjAluno,
      [e.target.name]: e.target.value
  }));
}

const cadastrar = () => {
  fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objAluno),
      headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
      }
  })
  .then(alunos =>alunos.json())
  .then(alunos_convertidas => {
    if (alunos_convertidas.mensagem !== undefined){
      alert(alunos_convertidas.mensagem)
    }else {
      setAlunos([...alunos, alunos_convertidas]);
      alert('Aluno cadastrado com sucesso')
      limparFormulario();
    }
  })
}
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <h4>Nome</h4>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={aoDigitar}
            value={objAluno.nome}
          />
        </div>
        <div className="grid-item">
          <h4>Data de Nascimento</h4>
          <input
            type="text"
            name="dataNascimento"
            placeholder="Data de Nascimento"
            onChange={aoDigitar}
            value={objAluno.dataNascimento}
            onKeyPress={apenasNumeros}
          />
        </div>
        <div className="grid-item">
          <h4>Cpf</h4>
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={objAluno.cpf}
            onChange={aoDigitar}
            onKeyPress={apenasNumeros}
          />
        </div>
        <div className="grid-item">
          <h4>RG</h4>
          <input 
          type="text" 
          name="rg"
          placeholder="RG"
          onChange={aoDigitar}
          value={objAluno.rg}
          onKeyPress={apenasNumeros}
          />
        </div>
        <div className="grid-item">
          <h4>Matrícula</h4>
          <input
            type="text"
            name="matricula"
            placeholder="Matrícula"
            onChange={aoDigitar}
            value={objAluno.matricula}
          />
        </div>
        <div className="grid-item">
          <h4>Órgão Expedidor</h4>
          <input
            type="text"
            name="orgaoexpedido"
            placeholder="Órgão Expedidor"
            onChange={aoDigitar}
            value={objAluno.orgaoexpedido}
          />
        </div>
        <div className="grid-item">
          <h4>Nacionalidade</h4>
          <input
            type="text"
            name="nacionalidade"
            placeholder="Nacionalidade"
            onChange={aoDigitar}
            value={objAluno.nacionalidade}
          />
        </div>
        <div className="grid-item">
          <h4>Celular</h4>
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            onChange={aoDigitar}
            value={objAluno.celular}
            onKeyPress={apenasNumeros}
          />
        </div>
        <div className="grid-item">
          <h4>E-mail</h4>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={aoDigitar}
            value={objAluno.email}
          />
        </div>
        <div className="grid-item">
          <h4>Nome do Pai</h4>
          <input
            type="text"
            name="nomePai"
            placeholder="Nome do Pai"
            onChange={aoDigitar}
            value={objAluno.nomePai}
          />
        </div>
        <div className="grid-item">
          <h4>Nome da Mãe</h4>
          <input
            type="text"
            name="nomeMae"
            placeholder="Nome da Mãe"
            onChange={aoDigitar}
            value={objAluno.nomeMae}
          />
        </div>
        <div className="grid-item">
          <h4>Bairro</h4>
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            onChange={aoDigitar}
            value={objAluno.bairro}
          />
        </div>
        <div className="grid-item">
          <h4>Cidade</h4>
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            onChange={aoDigitar}
            value={objAluno.cidade}
          />
        </div>
        <div className="grid-item">
          <h4>Estado</h4>
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            onChange={aoDigitar}
            value={objAluno.estado}
          />
        </div>
        <div className="grid-item">
          <h4>Turno</h4>
          <input
            type="text"
            name="turno"
            placeholder="Turno"
            onChange={aoDigitar}
            value={objAluno.turno}
          />
        </div>
      </div>
      <span className="posicionamentoBtnCadastrar">
        <button className="btnCadastrar" onClick={cadastrar}>Cadastrar</button>
      </span>
    </div>
  );
};

export default Cadastrar;
