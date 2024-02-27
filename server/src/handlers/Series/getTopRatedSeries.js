const topRatedSeries = require("../../controllers/Series/getTopRatedSeries");

const getTRSeries = async (req, res) => {
    try {
        const response = await topRatedSeries();

        res.status(200).json(response);

    } catch (error) {
        res.status(404).json({error:error.message})
    }
};

module.exports = getTRSeries;