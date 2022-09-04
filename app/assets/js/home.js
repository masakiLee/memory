// 檢定日倒數綁定元素;
let one = document.querySelector(".one"); //倒數天數第一格
let two = document.querySelector(".two"); //倒數天數第二格
let three = document.querySelector(".three"); //倒數天數第三格
let inputTime = new Date("2022-12-04 00:00:00"); //最後一天日期

// 簽到綁定元素
let clockOn = document.getElementById("clockOn");
let continuous = document.getElementById("continuous");

// 監聽 click 按鈕

clockOn.addEventListener("click", clock); //簽到;

// 檢定日函數;

function countDown() {
  const nowTime = new Date();
  const times = (inputTime - nowTime) / 1000;
  let d = parseInt(times / 60 / 60 / 24);
  d = d < 100 && d >= 10 ? "0" + d : d < 10 ? "0" + "0" + d : d; //小於100大於10 顯示 0+天數  小於10則顯示 0+0+天數
  let day = d.toString();
  one.innerHTML = day[0];
  two.innerHTML = day[1];
  three.innerHTML = day[2];
}
setInterval(countDown, 1000); //每一秒更新

// 簽到函數;
function clock() {
  let punch = Number(continuous.innerHTML);
  punch += 1;
  continuous.innerHTML = punch++;
}
