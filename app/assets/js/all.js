//倒數天數//

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let inputTime = new Date("2022-12-04 00:00:00");
setInterval(countDown, 1000);
function countDown() {
  const nowTime = new Date();
  const times = (inputTime - nowTime) / 1000;
  let d = parseInt(times / 60 / 60 / 24);
  d = d < 100 && d >= 10 ? "0" + d : d < 10 ? "0" + "0" + d : d;
  let day = d.toString();
  one.innerHTML = day[0];
  two.innerHTML = day[1];
  three.innerHTML = day[2];
}
//打卡//

let clockOn = document.querySelector(".clockOn");
let continuous = document.querySelector(".continuous");
clockOn.addEventListener("click", function (e) {
  continuous.innerHTML += 1;
});
