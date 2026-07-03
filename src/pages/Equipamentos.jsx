import { useState } from "react";
import "./Pagina.css";

function Equipamentos() {
  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");

  const [equipamentos, setEquipamentos] = useState([
    {
      id: 1,
      nome: "Escavadeira CAT",
      setor: "Extração"
    },
    {
      id: 2,
      nome: "Caminhão Fora de Estrada",
      setor: "Transporte"
    }
  ]);

  const [editando, setEditando] = useState(null);

  function salvar() {
    if (nome.trim() === "" || setor.trim() === "") {
      alert("Preencha todos os campos.");
      return;
    }

    if (editando) {
      const lista = equipamentos.map((item) =>
        item.id === editando
          ? { ...item, nome, setor }
          : item
      );

      setEquipamentos(lista);
      setEditando(null);
    } else {
      const novo = {
        id: Date.now(),
        nome,
        setor
      };

      setEquipamentos([...equipamentos, novo]);
    }

    setNome("");
    setSetor("");
  }

  function editar(item) {
    setNome(item.nome);
    setSetor(item.setor);
    setEditando(item.id);
  }

  function excluir(id) {
    const lista = equipamentos.filter((item) => item.id !== id);
    setEquipamentos(lista);
  }

  return (
    <div className="card">

      <h1 className="titulo">
        Equipamentos
      </h1>

      <div className="formulario">

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Setor"
          value={setor}
          onChange={(e) => setSetor(e.target.value)}
        />

        <button onClick={salvar}>
          {editando ? "Salvar" : "Cadastrar"}
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>Setor</th>
            <th>Ações</th>
          </tr>

        </thead>

        <tbody>

          {equipamentos.map((item) => (

            <tr key={item.id}>

              <td>{item.nome}</td>

              <td>{item.setor}</td>

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

export default Equipamentos;