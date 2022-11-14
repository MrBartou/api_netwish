const recommandation = require('../services/recommandation.service');

async function getRecommandation(req, res) {
    const result = await recommandation.getRecommandation();
    console.log(result);
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(404).send('No recommandation found');
    }
}

module.exports = {
    getRecommandation,
};