const monk = require('monk');

const connectionURL = 'mongodb://vaibhav:abc12345@ds053597.mlab.com:53597/url-prod';
// const connectionURL = process.env.MONGODB_URI || 'localhost/instaurl-co';
const db = monk(connectionURL);

module.exports = db;