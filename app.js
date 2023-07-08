const express = require("express");
const app = express();
const morgan = require("morgan");

const cors = require("cors");
const helmet = require("helmet");

const routes = require("./src/routes");

app.use(cors())
app.use(helmet())

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

app.use(morgan("dev"));

app.use("/api/v1",routes);

app.set(process.env.PORT);

module.exports = app;