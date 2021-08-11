const pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://postgres:minho1010@localhost:5432/pg_db");
module.exports = db