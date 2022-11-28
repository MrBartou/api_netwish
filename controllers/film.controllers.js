const filmsServices = require('../services/films.service');
const client = require('../redis');

async function getFilms(req, res) {
  await client.connect();
  const filmsCache = await client.get('films');
  if (filmsCache) {
    await client.disconnect();
    return res.status(200).json(JSON.parse(filmsCache));
  }
  else {
    const films = await filmsServices.getFilms();

    if (films) {
      await client.set('films', JSON.stringify(films));
      await client.disconnect();
      return res.status(200).json(films);
    } else {
      return res.status(404).json({ message: 'No films found' });
    }

  }

}

module.exports = {
  getFilms,
};