const seriesByName = require("../../controllers/Series/getSeriesByName");

const getSeries_By_Name = async (req, res) => {
    const { name } = req.query;

    try {
        const response = await seriesByName(name);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

module.exports = getSeries_By_Name;