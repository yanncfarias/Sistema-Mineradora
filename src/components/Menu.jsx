import "./Menu.css";

function Menu({ setPagina }) {
  return (
    <nav className="menu">

      <h2>Sistema Mineradora</h2>

      <div>

        <button onClick={() => setPagina("inicio")}>
          Início
        </button>

        <button onClick={() => setPagina("equipamentos")}>
          Equipamentos
        </button>

        <button onClick={() => setPagina("cidades")}>
          Cidades
        </button>

        <button onClick={() => setPagina("funcionarios")}>
          Funcionários
        </button>

        <button onClick={() => setPagina("servicos")}>
          Serviços
        </button>

      </div>

    </nav>
  );
}

export default Menu;