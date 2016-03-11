/*global module */

// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1664072460523749', // your App ID
        'clientSecret'  : '7908d797f0fa7c1a9b780e023b2934e2', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'fKLam7uerttTWJtCqU9I37HMS',
        'consumerSecret'    : 'lFmwSaSU0lJdllSIQgQWXcIMSA0SXQRQdz00I3cZXTiT24aDXN',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '677949377842-eum5kms8gbl5qa75p06oiv2pgi99h5ee.apps.googleusercontent.com',
        'clientSecret'  : 'EmrTbK15SKqT_Q01ArdAEXFf',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};