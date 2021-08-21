const initOptions = {
    query(e) {
        console.log('QUERY:', e.query);
    }
};
const pgp = require("pg-promise")(initOptions);
const db = pgp("postgres://postgres:minho1010@localhost:5432/pg_db");
module.exports = db