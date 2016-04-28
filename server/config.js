var nconf = require('nconf');

nconf.env().argv();

nconf.defaults({
    appTitle: "Angular2 - Starter"
});

module.exports = nconf;