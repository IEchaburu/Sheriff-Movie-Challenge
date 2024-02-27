const seriesGenres = require("../../controllers/Series/getSeriesGenres");

const getSGenres = async (req, res) => {
    try {
        const response = await seriesGenres();

        res.status(200).json(response);

    } catch (error) {
        res.status(404).json({error:error.message})
    }
};

module.exports = getSGenres;