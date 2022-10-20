const express = require('express');
const dotenv = require('dotenv');
require('./config/db');
const routes = require('./routes/router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use(routes);

app.use('/uploads', express.static('./uploads'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on this ${port}`);
});
