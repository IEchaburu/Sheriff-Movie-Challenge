const newUser = require("../../controllers/Users/createuser");

const postNewUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await newUser(email, password);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = postNewUser;