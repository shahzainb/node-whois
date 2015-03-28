'use strict';
//global require wrapper for app modules
global.rootRequire = function(name) {
  return require(__dirname + '/' + name);
};

//babel polyfill for things like promises to make node support them
require('babel/polyfill');

var restify = require('restify');
var fs = require('fs');
var domain = require('domain');
var config = require('./config');
var route;

//Server instance with registered options
var api = restify.createServer({
	name: config.api.name,
	formatters: {
		'application/json': function(req, res, body){
			return JSON.stringify(body);
		}
	}
});

api.pre(restify.pre.sanitizePath());

api.use(restify.acceptParser(api.acceptable));
api.use(restify.bodyParser());
api.use(restify.queryParser());

//CORS
api.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	return next();
});

//Global error handler
api.use(function(req, res, next) {
	var domainHandler = domain.create();
	
	domainHandler.on('error', function(err) {
		var errMsg = 'Request: \n' + req + '\n';
		errMsg += 'Response: \n' + res + '\n';
		errMsg += 'Context: \n' + err;
		errMsg += 'Trace: \n' + err.stack + '\n';

    // todo add logger
		domain.dispose();
	});

	domainHandler.enter();
	next();
});

//Iterates through all ./dist/routes files to find matching route
fs.readdirSync('./api/dist/routes').forEach(function (curFile) {
  if ( curFile.substr(-3) === '.js' ) {
    route = require('./api/dist/routes/' + curFile);
    route.routes(api);
  }
});

api.listen(config.environment.port, function() {
	console.log('Application `%s` is running at %s', config.api.name, api.url);
});