const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "react",
    port: 5432,
    database: "todo"
});

module.exports = pool;
//exporting DB
