const del = document.querySelector(".del");
const infoModalone = document.querySelector("#infoModalone");
const closeone = document.querySelector("#closeone");

const plus = document.querySelector(".plus");
const infoModaltwo = document.querySelector("#infoModaltwo");
const closetwo = document.querySelector("#closetwo");

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
