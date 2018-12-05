const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost/node_rest_api';
const mongoDB = 'mongodb://admin:admin123@ds123454.mlab.com:23454/db-ads-unimetrocamp';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;