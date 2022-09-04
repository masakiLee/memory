"use strict";

var del = document.querySelector(".del");
var infoModalone = document.querySelector("#infoModalone");
var closeone = document.querySelector("#closeone");
var plus = document.querySelector(".plus");
var infoModaltwo = document.querySelector("#infoModaltwo");
var closetwo = document.querySelector("#closetwo");
del.addEventListener("click", function (e) {
  infoModalone.showModal();
  e.preventDefault();
});
closeone.addEventListener("click", function (e) {
  infoModalone.close();
  e.preventDefault();
});
plus.addEventListener("click", function (e) {
  infoModaltwo.showModal();
});
closetwo.addEventListener("click", function (e) {
  infoModaltwo.close();
});
//# sourceMappingURL=vocabulary.js.map
