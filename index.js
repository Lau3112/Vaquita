require("dotenv").config();

const express = require("express");
const path = require(`path`);
const ejs = require('ejs');

const app = express();

const mainRouter = require('./routes/routes')
app.use(mainRouter);

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));



