const routes = require("./routes/index");
const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const { Strategy } = require("passport-local");
const session = require("express-session");
const app = express();



app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// MANEJO DE LOGIN Y SESIONES PARA USUARIOS
app.use(session({
    secret: process.env.LOGIN_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 15, // 15 minutos de vigencia
    }
  }));
app.use(passport.initialize());
app.use(passport.session());  



app.use("", routes);

module.exports = app;
