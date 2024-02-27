const popularSeries = require("../../controllers/Series/getPopularSeries");

const getPSeries = async (req, res) => {
    try {
        const response = await popularSeries();

        res.status(200).json(response);

    } catch (error) {
        res.status(404).json({error:error.message})
    }
};

module.exports = getPSeries;