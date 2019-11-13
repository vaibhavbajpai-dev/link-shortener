const monk = require('monk');
const connectionURL = process.env.MONGODB_URI || 'localhost/instaurl-co';
const db = monk(connectionURL);

module.exports = db;