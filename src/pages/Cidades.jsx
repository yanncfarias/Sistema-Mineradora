import { useState } from "react";
import "./Pagina.css";

function Cidades() {
  const [nome, setNome] = useState("");

  const [cidades, setCidades] = useState([
    { id: 1, nome: "Parauapebas" },
    { id: 2, nome: "Marabá" }
  ]);

  const [editando, setEditando] = useState(null);

  function salvar() {
    if (nome.trim() === "") {
      alert("Informe o nome da cidade.");
      return;
    }

    if (editando) {
      setCidades(
        cidades.map((cidade) =>
          cidade.id === editando
            ? { ...cidade, nome }
            : cidade
        )
      );

      setEditando(null);
    } else {
      setCidades([
        ...cidades,
        {
          id: Date.now(),
          nome
        }
      ]);
    }

    setNome("");
  }

  function editar(cidade) {
    setNome(cidade.nome);
    setEditando(cidade.id);
  }

  function excluir(id) {
    setCidades(cidades.filter((cidade) => cidade.id !== id));
  }

  return (
    <div className="card">

      <h1 className="titulo">Cidades</h1>

      <div className="formulario">

        <input
          type="text"
          placeholder="Nome da cidade"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button onClick={salvar}>
          {editando ? "Salvar" : "Cadastrar"}
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Cidade</th>
            <th>Ações</th>
          </tr>

        </thead>

        <tbody>

          {cidades.map((cidade) => (

            <tr key={cidade.id}>

              <td>{cidade.nome}</td>

              <td>

                <button
                  className="editar"
                  onClick={() => editar(cidade)}
                >
                  Editar
                </button>

                <button
                  className="excluir"
                  onClick={() => excluir(cidade.id)}
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

export default Cidades;