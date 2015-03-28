"use strict";

exports.whoIs = whoIs;
exports.getExpirationDate = getExpirationDate;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var request = require("request");

var apiKey = rootRequire("api-key").key;

var jsonWhoIsUrl = "https://jsonwhois.com/api/v1/whois";

function whoIs(domain) {

  var options = {
    url: jsonWhoIsUrl,
    headers: {
      Accept: "application/json",
      Authorization: "Token token=" + apiKey
    },
    qs: {
      domain: domain
    }
  };

  return new Promise(function (resolve, reject) {
    request(options, function (error, response, body) {

      if (error) {
        reject("Could not connect to JSON WhoIs");
      }

      if (response.statusCode === 200) {
        body = JSON.parse(body);

        if (body.error) {
          reject(body);
        }

        resolve(body);
      } else {

        var errorResponse = {
          statusCode: 0,
          message: ""
        };

        if (typeof response.body !== "string") {
          response.body = JSON.parse(response.body);
        }

        if (response.body.error) {
          errorResponse.statusCode = response.body.status;
          errorResponse.message = response.body.error;

          reject(errorResponse);
        } else {
          errorResponse.statusCode = response.statusCode;
          errorResponse.message = response.body;

          reject(errorResponse);
        }
      }
    });
  });
}

function getExpirationDate(domain) {
  return new Promise(function (resolve, reject) {

    whoIs(domain).then(function (data) {
      var responseObject = {
        domain: domain,
        expiryDate: data.expires_on
      };
      resolve(responseObject);
    })["catch"](function (error) {
      reject(error);
    });
  });
}