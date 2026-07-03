import { useState } from "react";
import "./Pagina.css";

function Servicos() {
  const [nome, setNome] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const [servicos, setServicos] = useState([
    {
      id: 1,
      nome: "Manutenção Preventiva",
      responsavel: "Carlos Henrique"
    },
    {
      id: 2,
      nome: "Inspeção de Máquinas",
      responsavel: "Mariana Souza"
    }
  ]);

  const [editando, setEditando] = useState(null);

  function salvar() {
    if (!nome || !responsavel) {
      alert("Preencha todos os campos.");
      return;
    }

    if (editando) {
      setServicos(
        servicos.map((item) =>
          item.id === editando
            ? { ...item, nome, responsavel }
            : item
        )
      );

      setEditando(null);
    } else {
      setServicos([
        ...servicos,
        {
          id: Date.now(),
          nome,
          responsavel
        }
      ]);
    }

    setNome("");
    setResponsavel("");
  }

  function editar(item) {
    setNome(item.nome);
    setResponsavel(item.responsavel);
    setEditando(item.id);
  }

  function excluir(id) {
    setServicos(servicos.filter((item) => item.id !== id));
  }

  return (
    <div className="card">

      <h1 className="titulo">Serviços</h1>

      <div className="formulario">

        <input
          placeholder="Serviço"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="Responsável"
          value={responsavel}
          onChange={(e) => setResponsavel(e.target.value)}
        />

        <button onClick={salvar}>
          {editando ? "Salvar" : "Cadastrar"}
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Serviço</th>
            <th>Responsável</th>
            <th>Ações</th>
          </tr>

        </thead>

        <tbody>

          {servicos.map((item) => (

            <tr key={item.id}>

              <td>{item.nome}</td>

              <td>{item.responsavel}</td>

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

export default Servicos;