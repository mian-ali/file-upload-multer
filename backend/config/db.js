const mongoose = require('mongoose');

const DB = process.env.MONGO_DB;

mongoose
  .connect(
    'mongodb+srv://crud:crud@cluster0.pum05.mongodb.net/imgUpload?retryWrites=true&w=majority'
  )
  .then(() => console.log('DATABASE connected'))
  .catch((err) => console.log('error' + err.message));
