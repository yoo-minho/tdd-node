let userDb;

const findAll = () => {
    userDb.any("SELECT $1 AS value", 123)
        .then(function (data) {
            console.log("DATA:", data);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
}

const findOne = () => {
    userDb.any("SELECT $1 AS value", 123)
        .then(function (data) {
            console.log("DATA:", data);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
}

const destroy = () => {
    userDb.any("SELECT $1 AS value", 123)
        .then(function (data) {
            console.log("DATA:", data);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
}

const create = () => {
    userDb.any("SELECT $1 AS value", 123)
        .then(function (data) {
            console.log("DATA:", data);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
}

const update = () => {
    userDb.any("SELECT $1 AS value", 123)
        .then(function (data) {
            console.log("DATA:", data);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
}

module.exports = (db) => {
    userDb = db;
    return {findAll, findOne, destroy, create, update}
}