"use strict";

//倒數天數//
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var inputTime = new Date("2022-12-04 00:00:00");
setInterval(countDown, 1000);

function countDown() {
  var nowTime = new Date();
  var times = (inputTime - nowTime) / 1000;
  var d = parseInt(times / 60 / 60 / 24);
  d = d < 100 && d >= 10 ? "0" + d : d < 10 ? "0" + "0" + d : d;
  var day = d.toString();
  one.innerHTML = day[0];
  two.innerHTML = day[1];
  three.innerHTML = day[2];
} //打卡//


var clockOn = document.querySelector(".clockOn");
var continuous = document.querySelector(".continuous");
clockOn.addEventListener("click", function (e) {
  continuous.innerHTML += 1;
});
//# sourceMappingURL=all.js.map
