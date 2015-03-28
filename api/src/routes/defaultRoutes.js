import {
    whoIs,
    getExpirationDate
  } from '../helpers/helpers'

const [restify, config] = [
  require('restify'),
  rootRequire('config')
];

let rateLimit = restify.throttle({
	burst: config.limiter.defaultBurstRate,
	rate: config.limiter.defaultRatePerSec,
	ip: true
});

function DefaultRoutes(api) {

  api.get('/api/whois/:domain', rateLimit, (req, res, next) => {
    const domain = req.params.domain;

    whoIs(domain)
      .then(data => {
        res.send(200, data);
      })
      .catch(error => {

        if (error.statusCode) {

          error.statusCode = parseInt(error.statusCode);

          res.send(error.statusCode, {
            error: error.message
          });
        }
        else {
          res.send(500, error);
        }

      });
  });

	api.get('/api/whois/expiration/:domain', rateLimit, (req, res, next) => {
    const domain = req.params.domain;

    getExpirationDate(domain)
      .then(response => {
        res.send(200, response);
      })
      .catch(error => {
        res.send(new restify.NotFoundError(error));
      });
  });
}

module.exports.routes = DefaultRoutes;