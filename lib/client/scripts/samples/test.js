(function(){
  /**
   *  # Testing the whole minification thing
   */

  "use strict";

  module.exports = (function(){
    var something = "something",
      somethingElse = "something else",
      external = require("./test2.js");

    console.log("something", something, somethingElse, external);
    console.log("and another log");

    function addThem(){
      return something + somethingElse;
    }
    console.log("ready to do something");
    return addThem();
  })();
})();