import conexao from "../config/conexao.js";

export async function cadastrar(leitura) {
    const sql = "INSERT INTO leituras_energia(maquina_id, data_leitura, consumo_kwh, horas_operacao) VALUES(?,?,?,?)"
    const [resultado] = await conexao.execute(sql, [leitura])

    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM leituras_energias"
    const [resultado] = await conexao.execute(sql)

    return resultado[0];
}

export async function listarDetalhadas() {
    const sql = "SELECT ? FROM leituras_energias WHERE id = ?"
    const [resultado] = await conexao.execute(sql)

    return resultado[0];
}

export async function buscarPorId(id) {
    const sql = "SELECT * FROM leituras_energias WHERE id = ?"
    const [resultado] = await conexao.execute(sql,[id])

    return resultado;
}

export async function atualizar(id, leitura) {
    const sql = "UPDATE SET leituras_energia(consumo_kwh, horas_operacao) VALUES(?,?)"
    const [resultado] = await conexao.execute(sql, [id, leitura])

    return resultado.affectedRows;
}

export async function deletar(id) { 
    const sql = "DELETE leituras_energia WHERE id = ?"
    const [resultado] = await conexao.execute(sql, [id])

    return resultado.affectedRows;
}

