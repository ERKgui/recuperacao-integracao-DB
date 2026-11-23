import conexao from "../config/conexao.js";

export async function cadastrar(maquina) {
    const sql = "INSERT INTO maquinas(codigo, nome, setor) VALUES(?,?,?)"
    const [resultado] = await conexao.execute(sql, [maquina])

    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM maquinas"
    const [resultado] = await conexao.execute(sql)

    return resultado[0];
}

export async function buscarPorId(id) {
    const sql = "SELECT * FROM maquinas WHERE id = ?"
    const [resultado] = await conexao.execute(sql,[id])

    return resultado;
}

export async function atualizar(id, maquina) {
    const sql = "UPDATE SET maquinas(codigo, nome, setor) VALUES(?,?,?)"
    const [resultado] = await conexao.execute(sql, [id, maquina])

    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = "DELETE FROM maquinas WHERE id = ?"
    const [resultado] = await conexao.execute(sql, [id])

    return resultado.affectedRows;
}

