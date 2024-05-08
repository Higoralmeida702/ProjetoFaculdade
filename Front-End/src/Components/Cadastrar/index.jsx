import "./Cadastrar.css";

const Cadastrar = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <h4>Nome</h4>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
          />
        </div>
        <div className="grid-item">
          <h4>Data de Nascimento</h4>
          <input
            type="text"
            name="dataNascimento"
            placeholder="Data de Nascimento"
          />
        </div>
        <div className="grid-item">
          <h4>Cpf</h4>
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
          />
        </div>
        <div className="grid-item">
          <h4>RG</h4>
          <input 
          type="text" 
          name="rg"
          placeholder="RG"
          />
        </div>
        <div className="grid-item">
          <h4>Matrícula</h4>
          <input
            type="text"
            name="matricula"
            placeholder="Matrícula"
          />
        </div>
        <div className="grid-item">
          <h4>Órgão Expedidor</h4>
          <input
            type="text"
            name="orgaoexpedido"
            placeholder="Órgão Expedidor"
          />
        </div>
        <div className="grid-item">
          <h4>Nacionalidade</h4>
          <input
            type="text"
            name="nacionalidade"
            placeholder="Nacionalidade"
          />
        </div>
        <div className="grid-item">
          <h4>Celular</h4>
          <input
            type="text"
            name="celular"
            placeholder="Celular"
          />
        </div>
        <div className="grid-item">
          <h4>E-mail</h4>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div className="grid-item">
          <h4>Nome do Pai</h4>
          <input
            type="text"
            name="nomePai"
            placeholder="Nome do Pai"
          />
        </div>
        <div className="grid-item">
          <h4>Nome da Mãe</h4>
          <input
            type="text"
            name="nomeMae"
            placeholder="Nome da Mãe"
          />
        </div>
        <div className="grid-item">
          <h4>Bairro</h4>
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
          />
        </div>
        <div className="grid-item">
          <h4>Cidade</h4>
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
          />
        </div>
        <div className="grid-item">
          <h4>Estado</h4>
          <input
            type="text"
            name="estado"
            placeholder="Estado"
          />
        </div>
        <div className="grid-item">
          <h4>Turno</h4>
          <input
            type="text"
            name="turno"
            placeholder="Turno"
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
