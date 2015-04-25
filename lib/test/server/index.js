/**
 * # Server Tests Index
 */

"use strict";

var env = !!process.env.APP_ENV ? process.env.APP_ENV : "default",
  config = require("../../../config/" + env),
  expect = require("chai").expect;

global.config = config;

describe("Server Tests Running", function(){
  it("Should pass this test", function(){
    expect(true).to.equal(true);
  });
});

require("./utils/logger");
