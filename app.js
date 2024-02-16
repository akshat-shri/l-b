const express = require('express');
const mssql = require('mssql');
const bodyParser = require ('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

