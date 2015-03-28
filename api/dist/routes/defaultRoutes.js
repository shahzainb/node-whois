"use strict";

var _helpersHelpers = require("../helpers/helpers");

var whoIs = _helpersHelpers.whoIs;
var getExpirationDate = _helpersHelpers.getExpirationDate;

var restify = require("restify");

var config = rootRequire("config");

var rateLimit = restify.throttle({
  burst: config.limiter.defaultBurstRate,
  rate: config.limiter.defaultRatePerSec,
  ip: true
});

function DefaultRoutes(api) {

  api.get("/api/whois/:domain", rateLimit, function (req, res, next) {
    var domain = req.params.domain;

    whoIs(domain).then(function (data) {
      res.send(200, data);
    })["catch"](function (error) {

      if (error.statusCode) {

        error.statusCode = parseInt(error.statusCode);

        res.send(error.statusCode, {
          error: error.message
        });
      } else {
        res.send(500, error);
      }
    });
  });

  api.get("/api/whois/expiration/:domain", rateLimit, function (req, res, next) {
    var domain = req.params.domain;

    getExpirationDate(domain).then(function (response) {
      res.send(200, response);
    })["catch"](function (error) {
      res.send(new restify.NotFoundError(error));
    });
  });
}

module.exports.routes = DefaultRoutes;