/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    {
        extended: true
    }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to rest api");
});

const marcaRoutes = require("./routes/marca.routes");
marcaRoutes(app);

const computadorRoutes = require("./routes/computador.routes");
computadorRoutes(app);

app.listen(port, () => {
    console.log("Server is running...");
});
