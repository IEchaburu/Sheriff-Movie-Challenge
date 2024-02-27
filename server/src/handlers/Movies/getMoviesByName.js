const moviesByName = require("../../controllers/Movies/getMoviesByName");

const getMovies_By_Name = async (req, res) => {
    const { name } = req.query;

    try {
        const response = await moviesByName(name);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

module.exports = getMovies_By_Name;