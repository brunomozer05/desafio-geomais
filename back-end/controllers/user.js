import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const createUser = (req, res) => {
  const { nome, cpf, data_nasc, rg, sexo } = req.body;
  const query = `INSERT INTO usuarios (nome, cpf, data_nasc, rg, sexo) VALUES ('${nome}', '${cpf}', '${data_nasc}', '${rg}', '${sexo}') RETURNING id`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const updateUser = (req, res) => {
  const { nome, cpf, data_nasc, rg, sexo } = req.body;
  const query = `UPDATE usuarios SET nome = '${nome}', cpf = '${cpf}', data_nasc = '${data_nasc}', rg = '${rg}', sexo = '${sexo}' WHERE id = ${req.params.id} RETURNING id`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const deleteUser = (req, res) => {
  const query = `DELETE FROM usuarios WHERE id = ${req.params.id}`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json({});
  });
};

export const countUsers = (_, res) => {
  const query = `SELECT COUNT(*) FROM usuarios;`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    const count = data.rows[0].count;
    return res.status(200).json({ count });
  });
};
