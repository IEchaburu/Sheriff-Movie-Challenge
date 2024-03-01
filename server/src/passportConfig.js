const passport = require("passport");
const session = require("express-session")
const { Strategy } = require("passport-local");

passport.use(
    new Strategy(async function verify(username, password, cb) {
        console.log("llegue");
      try
      {
        //Busco que el mail exista
        const result = await db.query("SELECT * FROM users WHERE email = $1", [username]);
  
        //Si el resistro existe
        if (result.rows.length > 0)
        {
          //Si la password corresponde lo logueo
          const user = result.rows[0];
          const storedPassword = user.password;
  
          bcrypt.compare(password, storedPassword, (err, result) => {
            if (err)
              console.log("Error comparando passwords: ", err);
            else {
              if (result)
                return cb(null, user);
              else
                return cb("Password incorrecta", false);  
            }
          });
        }
        else
          return cb("El usuario no está registrado");
          //res.send("El usuario no está registrado");
      }
      catch (err) {
        return cb(err);
        //console.log(err);
      }
  }));
  
  passport.serializeUser((user,cb) => {
    cb(null, user);
  });
  
  passport.deserializeUser((user,cb) => {
    cb(null, user);
  });

  
module.exports = passport;