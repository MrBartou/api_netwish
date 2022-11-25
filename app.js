const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
YAML = require('yamljs')
const swaggerFile = YAML.load('./openapi.yaml')

// const usersRoutes = require("./routes/users.router");
// const favorisRoutes = require("./routes/favoris.router");
// const filmsRoutes = require("./routes/films.router");
// const recommandationsRoutes = require("./routes/recommandations.router");
// const seriesRoutes = require("./routes/series.router");
const app = express();
app.use(bodyParser.json());

console.log("haaa");
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// app.use("/users", usersRoutes);
// app.use("/favoris", favorisRoutes);
// app.use("/films", filmsRoutes);
// app.use("/recommandations", recommandationsRoutes);
// app.use("/series", seriesRoutes);

module.exports = app;
