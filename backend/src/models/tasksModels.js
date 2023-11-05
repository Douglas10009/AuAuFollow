// --
// Esse arquivo pega os dados da taskController, verifica os dados no banco e retorna o resultado
// --> É o nível mais baixo dessa aplicação
// -- 

const connection = require('./connetion');

// Acessar o banco de dados e retornar
const getAll =  async () => {
    // array destruction
    // Retorna somente a primeira posição do array
    const [tasks] = await connection.execute('SELECT * FROM clientes');// ele espera uma query em sql
    return tasks;
};

const createCliente = async (cliente) => {
    const {nome, email, senha} = cliente;

    const query = 'INSERT INTO clientes(nome,email,senha) VALUES (?,?,?)';
    const [createdCliente] = await connection.execute(query, [nome,email,senha]);
    
    // Para retornar somente o 'insertId' da requisição
    return {insertId: createdCliente.insertId};
};

const deleteCliente = async (id) => {
    const removedCliente = await connection.execute('DELETE FROM clientes WHERE id = ?', [id]);
    return removedCliente;
};

const updateCliente = async (id, task) => {
    // What about a updated_at?
    const { nome,email, senha } = task;

    const updatedCliente = (await connection.execute('UPDATE clientes SET nome=?, email = ?, senha = ? WHERE id=?', [nome,email,senha, id]));

    return updatedCliente;
};

module.exports = {
    getAll,
    createCliente,
    deleteCliente,
    updateCliente
};