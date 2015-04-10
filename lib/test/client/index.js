/**
 * # Client Tests Index
 */

(function(){
  "use strict";

  var expect = require("chai").expect;

  describe("Tests running properly", function(){
    it("Should be up and running", function(){
      expect(true).to.equal(true);
    });
  });
  require("./samples/test");
})();