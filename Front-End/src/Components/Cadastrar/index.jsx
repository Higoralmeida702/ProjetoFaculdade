import "./Cadastrar.css";
import { useState } from "react";
const Cadastrar = () => {

    const infoAluno = {
        id : 0,
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

 const [objAluno, setObjAluno] = useState(infoAluno)

 const aoDigitar = (e) => {
     setObjAluno((prevObjAluno) => ({
         ...prevObjAluno,
         [e.target.name]: e.target.value
     }));
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
          />
        </div>
        <div className="grid-item">
          <h4>Data de Nascimento</h4>
          <input
            type="text"
            name="dataNascimento"
            placeholder="Data de Nascimento"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Cpf</h4>
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>RG</h4>
          <input 
          type="text" 
          name="rg"
          placeholder="RG"
          onChange={aoDigitar}pl
          />
        </div>
        <div className="grid-item">
          <h4>Matrícula</h4>
          <input
            type="text"
            name="matricula"
            placeholder="Matrícula"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Órgão Expedidor</h4>
          <input
            type="text"
            name="orgaoexpedido"
            placeholder="Órgão Expedidor"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Nacionalidade</h4>
          <input
            type="text"
            name="nacionalidade"
            placeholder="Nacionalidade"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Celular</h4>
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>E-mail</h4>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Nome do Pai</h4>
          <input
            type="text"
            name="nomePai"
            placeholder="Nome do Pai"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Nome da Mãe</h4>
          <input
            type="text"
            name="nomeMae"
            placeholder="Nome da Mãe"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Bairro</h4>
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Cidade</h4>
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Estado</h4>
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            onChange={aoDigitar}
          />
        </div>
        <div className="grid-item">
          <h4>Turno</h4>
          <input
            type="text"
            name="turno"
            placeholder="Turno"
            onChange={aoDigitar}
          />
        </div>
      </div>
      <span className="posicionamentoBtnCadastrar">
        <button className="btnCadastrar">Cadastrar</button>
      </span>
    </div>
  );
};

export default Cadastrar;
