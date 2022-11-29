const filmsServices = require('../services/films.service');
const client = require('../redis');

async function getFilms(req, res) {
  client.get('films', async (err, data) => {
    if (err) throw err;
    if (data !== null) {
      return res.status(200).json({
        success: true,
        data: JSON.parse(data),
      });
    } else {
      const films = await filmsServices.getFilms();
      if (films) {
        client.set('films', JSON.stringify(films));
        return res.status(200).json({
          success: true,
          data: films,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'No films found',
        });
      }
    }
  });
}

module.exports = {
  getFilms,
};