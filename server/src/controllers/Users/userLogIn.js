// const pg = require("pg");
// const passport = require("passport");
// const { Strategy } = require("passport-local");
// const bcrypt = require("bcrypt");
// const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

// const userLogIn = async (email, password) => {
     
//     //CONEXION  A BASE DE DATOS REMOTA
//     const db = new pg.Client({
//         user: PG_REMOTE_USER,
//         host: PG_REMOTE_HOST,
//         database: PG_REMOTE_DATABASE,
//         password: PG_REMOTE_PASSWORD,
//         port: PG_REMOTE_PORT,
//         ssl: {
//         rejectUnauthorized: false
//         }
//     });

//     db.connect();

//     const findUser = await db.query("SELECT * FROM users WHERE email = $1" , [email]);

//     if (findUser.rowCount  0) 


    

// };

// module.exports = userLogIn;
