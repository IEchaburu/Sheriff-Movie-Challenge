const topRatedMovies = require("../../controllers/Movies/getTopRatedMovies");

const getTRMovies = async (req, res) => {
    try {
        const response = await topRatedMovies();

        res.status(200).json(response);

    } catch (error) {
        res.status(404).json({error:error.message})
    }
};

module.exports = getTRMovies;