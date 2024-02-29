const bcrypt = require("bcrypt");
const pg = require("pg")
const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

const newUser = async (email, password) => {
    
    //EN CASO DE FALTAR INFORMACION NO SE PROCEDE A CREAR EL USUARIO
    if (!email || !password) throw new Error ("There is data missing");

  
    //CONEXION  A BASE DE DATOS REMOTA
    const db = new pg.Client({
        user: PG_REMOTE_USER,
        host: PG_REMOTE_HOST,
        database: PG_REMOTE_DATABASE,
        password: PG_REMOTE_PASSWORD,
        port: PG_REMOTE_PORT,
        ssl: {
        rejectUnauthorized: false
        }
    });

    db.connect();
    
  
    //EN CASO DE QUE EL USUARIO YA EXISTA NO SE PROCEDE A CREAR EL USUARIO
    const findUser = await db.query("SELECT * FROM users WHERE email = $1" , [email]);
    if (findUser.rowCount > 0) throw new Error ("This user already exists!");

    //ENCRIPTAMOS LA PASSWORD
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw new Error ("Error: ", err)
        else {
            db.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",[email, hash], 
                     function(err, result) {
                      if (err) throw new Error ("Error: ", err)
                    }
                );
        }
    })

    return "User created successfully"

};

module.exports = newUser;
