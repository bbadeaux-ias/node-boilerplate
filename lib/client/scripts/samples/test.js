/**
 *  # Sample script
 */

"use strict";

module.exports = (function(){
  var something = "something",
    somethingElse = "something else";

  function addThem(){
    return something + somethingElse;
  }

  return addThem();
})();