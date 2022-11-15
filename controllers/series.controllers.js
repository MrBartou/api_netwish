const seriesServices = require('../services/series.services');
const client = require('../redis');

async function getSeries(req, res) {
    await client.connect();
    const seriesCache = await client.get('series');
    if (seriesCache) {
        await client.disconnect();
        return res.status(200).json(JSON.parse(seriesCache));
    }
    else {
        const series = await seriesServices.getSeries();
    
        if (series) {
        await client.set('series', JSON.stringify(series));
        await client.disconnect();
        return res.status(200).json(series);
        } else {
        return res.status(404).json({ message: 'No series found' });
        }
    
    }
    
    }

module.exports = {
    getSeries,
};