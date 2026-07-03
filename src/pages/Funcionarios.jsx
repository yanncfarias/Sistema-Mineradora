import { useState } from "react";
import "./Pagina.css";

function Funcionarios() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");

  const [funcionarios, setFuncionarios] = useState([
    {
      id: 1,
      nome: "Carlos Henrique",
      cargo: "Operador"
    },
    {
      id: 2,
      nome: "Mariana Souza",
      cargo: "Engenheira"
    }
  ]);

  const [editando, setEditando] = useState(null);

  function salvar() {
    if (!nome || !cargo) {
      alert("Preencha todos os campos.");
      return;
    }

    if (editando) {
      setFuncionarios(
        funcionarios.map((item) =>
          item.id === editando
            ? { ...item, nome, cargo }
            : item
        )
      );

      setEditando(null);
    } else {
      setFuncionarios([
        ...funcionarios,
        {
          id: Date.now(),
          nome,
          cargo
        }
      ]);
    }

    setNome("");
    setCargo("");
  }

  function editar(item) {
    setNome(item.nome);
    setCargo(item.cargo);
    setEditando(item.id);
  }

  function excluir(id) {
    setFuncionarios(funcionarios.filter((item) => item.id !== id));
  }

  return (
    <div className="card">

      <h1 className="titulo">Funcionários</h1>

      <div className="formulario">

        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />

        <button onClick={salvar}>
          {editando ? "Salvar" : "Cadastrar"}
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>

        </thead>

        <tbody>

          {funcionarios.map((item) => (

            <tr key={item.id}>

              <td>{item.nome}</td>

              <td>{item.cargo}</td>

              <td>

                <button
                  className="editar"
                  onClick={() => editar(item)}
                >
                  Editar
                </button>

                <button
                  className="excluir"
                  onClick={() => excluir(item.id)}
                >
                  Excluir
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Funcionarios;