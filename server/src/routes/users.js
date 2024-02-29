const { Router } = require("express");
const postNewUser = require('../handlers/Users/newUser');

const users_router = Router();

users_router.post('/create_user', postNewUser);


module.exports = users_router;