/**
 * # Sample Test
 */

  "use strict";

module.exports = (function(){
  var expect = require("chai").expect,
    sample = require("../../../client/scripts/samples/test");

  describe("Sample Test", function(){
    it("Should match hard coded string", function(){
      expect(sample).to.equal("somethingsomething else");
    });
  });
})();
