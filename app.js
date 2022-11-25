const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.router");
const favorisRoutes = require("./routes/favoris.router");
const filmsRoutes = require("./routes/films.router");
const recommandationsRoutes = require("./routes/recommandation.router");   
const seriesRoutes = require("./routes/series.router");
const app = express()
app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/favoris", favorisRoutes);
app.use("/films", filmsRoutes);
app.use("/recommandations", recommandationsRoutes);
app.use("/series", seriesRoutes);

module.exports = app;
