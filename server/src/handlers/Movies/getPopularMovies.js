const popularMovies = require("../../controllers/Movies/getPopularMovies");

const getPMovies = async (req, res) => {
    try {
        const response = await popularMovies();

        res.status(200).json(response);

    } catch (error) {
        res.status(404).json({error:error.message})
    }
};

module.exports = getPMovies;
