const monk = require('monk');


const connectionURL = 'mongodb://vaibhav:abc12345@ds053597.mlab.com:53597/url-prod' || 'localhost/insta-url.herokuapp.com';

const db = monk(connectionURL);

module.exports = db;
