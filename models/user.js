let userDb;

const awaitDbExecute = async (query, inputJson) => {
    try {
        return await userDb.any(query, inputJson);
    } catch (e) {
        console.error(e);
        return null;
    }
}

const findAll = () => {
    const query = 'SELECT * FROM users';
    return awaitDbExecute(query);
}

const findById = (id) => {
    const query = 'SELECT * FROM users WHERE id = ${id}';
    return awaitDbExecute(query, {id});
}

const destroy = (id) => {
    const query = 'DELETE FROM users WHERE id = ${id} RETURNING *';
    return awaitDbExecute(query, {id});
}

const create = (name) => {
    const query = "" +
        "INSERT INTO users (id, name) " +
        "SELECT NEXTVAL('users_seq'), ${name} " +
        "FROM (SELECT 1) fake " +
        "WHERE NOT EXISTS (SELECT 1 FROM users WHERE name = ${name}) " +
        "RETURNING * ";
    return awaitDbExecute(query, {name});
}

const update = (userId, userName) => {
    const query = "UPDATE users SET name = ${userName} WHERE id = ${userId} AND name != ${userName} RETURNING *";
    return awaitDbExecute(query, {userId, userName});
}

module.exports = (db) => {
    userDb = db;
    return {findAll, findById, destroy, create, update}
}