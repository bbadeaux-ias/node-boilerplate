(function(){
/**
 *  # Testing the whole minification thing
 */

 "use strict";

 var something = "something";

 var somethingElse = "something else";

 console.log("something", something, somethingElse);

 function addThem(){
 	return something + somethingElse;
 }
console.log("ready to do something");
 addThem();
})();