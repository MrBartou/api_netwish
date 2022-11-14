const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");
const favorisRoutes = require("./routes/favoris");
const filmsRoutes = require("./routes/films");
const recommandationsRoutes = require("./routes/recommandations");
const seriesRoutes = require("./routes/series");
const app = express();
app.use(bodyParser.json());

// app.use("/users", usersRoutes);
// app.use("/favoris", favorisRoutes);
// app.use("/films", filmsRoutes);
// app.use("/recommandations", recommandationsRoutes);
// app.use("/series", seriesRoutes);

module.exports = app;
