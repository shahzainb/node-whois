const [request, apiKey] = [
  require('request'),
  rootRequire('api-key').key
];

const jsonWhoIsUrl = 'https://jsonwhois.com/api/v1/whois';

export function whoIs (domain) {

  let options = {
    url: jsonWhoIsUrl,
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Token token=' + apiKey
    },
    qs: {
      domain: domain
    }
  };

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {

      if (error) {
        reject('Could not connect to JSON WhoIs');
      }

      if (response.statusCode === 200) {
        body = JSON.parse(body);

        if (body.error) {
          reject(body);
        }

        resolve(body);
      }
      else {

        let errorResponse = {
          statusCode: 0,
          message: ''
        };

        if (typeof response.body !== 'string') {
          response.body = JSON.parse(response.body);
        }

        if (response.body.error) {
          errorResponse.statusCode = response.body.status;
          errorResponse.message = response.body.error;

          reject(errorResponse);
        }
        else {
          errorResponse.statusCode = response.statusCode;
          errorResponse.message = response.body;

          reject(errorResponse);
        }
      }
    });
  });
}

export function getExpirationDate (domain) {
  return new Promise((resolve, reject) => {

    whoIs(domain)
      .then(data => {
        let responseObject = {
          domain: domain,
          expiryDate: data.expires_on
        };
        resolve(responseObject);
      })
      .catch(error => {
        reject(error);
      });

  });
}