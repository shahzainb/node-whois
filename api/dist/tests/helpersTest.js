"use strict";

var getExpirationDate = require("../helpers/helpers").getExpirationDate;

var expect = require("chai").expect;

describe("GetExpirationDate", function () {
  it("should return the expiration date", function () {

    var domain = "google.com";

    getExpirationDate(domain).then(function (date) {
      expect(date).to.equal("");
    });
  });
});