const filmsServices = require('../services/film.services');

async function getFilms(req, res) {
  const films = await filmsServices.getFilms();

  if (films) {
    return res.status(200).json(films);
  } else {
    return res.status(404).json({ message: 'No films found' });
  }
}

module.exports = {
    getFilms,
};