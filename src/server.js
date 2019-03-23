const express = require("express");
const bodyParser = require("body-parser");

const app = express();
port = process.env.PORT || 3000;
app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./api/routes/route');
routes(app);

console.log(`app started on port ${port}`);