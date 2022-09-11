"use strict";

// 檢定日倒數綁定元素;
var one = document.querySelector(".one"); //倒數天數第一格

var two = document.querySelector(".two"); //倒數天數第二格

var three = document.querySelector(".three"); //倒數天數第三格

var inputTime = new Date("2022-12-04 00:00:00"); //最後一天日期

var user = document.querySelector(".user"); //人名
// 簽到綁定元素

var clockOn = document.getElementById("clockOn");
var continuous = document.getElementById("continuous"); // 監聽 click 按鈕

clockOn.addEventListener("click", clock); //簽到;
// 檢定日函數;

function countDown() {
  var nowTime = new Date();
  var times = (inputTime - nowTime) / 1000;
  var d = parseInt(times / 60 / 60 / 24);
  d = d < 100 && d >= 10 ? "0" + d : d < 10 ? "0" + "0" + d : d; //小於100大於10 顯示 0+天數  小於10則顯示 0+0+天數

  var day = d.toString();
  one.innerHTML = day[0];
  two.innerHTML = day[1];
  three.innerHTML = day[2];
}

setInterval(countDown, 1000); //每一秒更新
// 簽到函數;

function clock() {
  var punch = Number(continuous.innerHTML);
  punch += 1;
  continuous.innerHTML = punch++;
}

user.onfocus = function () {
  this.value = "";
};

user.onblur = function () {
  if (this.value === "") {
    this.value = "userName";
  } // else {
  //   localStorage.setItem("name", this.value);
  //   this.value = localStorage.getItem("name");
  // }


  this.style.color = "#1D2D51";
};
//# sourceMappingURL=home.js.map
