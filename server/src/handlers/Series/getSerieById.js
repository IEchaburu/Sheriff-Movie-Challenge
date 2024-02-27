const serieById = require("../../controllers/Series/getSeriesById");


const getSerieByID = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await serieById(id);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = getSerieByID;