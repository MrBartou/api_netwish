const seriesServices = require('../services/series.service');
const client = require('../redis');

async function getSeries(req, res) {
    client.get('series', async (err, data) => {
        if (err) throw err;
        if (data !== null) {
            return res.status(200).json({
                success: true,
                data: JSON.parse(data),
            });
        } else {
            const series = await seriesServices.getSeries();
            if (series) {
                client.set('series', JSON.stringify(series));
                return res.status(200).json({
                    success: true,
                    data: series,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'No series found',
                });
            }
        }
    });
}

module.exports = {
    getSeries,
};