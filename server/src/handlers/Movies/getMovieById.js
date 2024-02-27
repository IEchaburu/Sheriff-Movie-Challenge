const movieById = require("../../controllers/Movies/getMoviesByID");

const getMovieByID = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await movieById(id);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = getMovieByID;