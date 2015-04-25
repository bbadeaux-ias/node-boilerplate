/**
 * # Logger Util Test
 */

"use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    logger = require("../../../server/utils/logger");

  describe("Logger Tests", function(){
    it("Should exist", function(){
      expect(!!logger).to.equal(true);
    });
  });
})();
