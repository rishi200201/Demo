const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const userRoute  = require('./Routes/user')
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use('/api/user',userRoute)

module.exports = app;