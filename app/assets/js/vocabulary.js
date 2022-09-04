const del = document.querySelector(".del");
let infoModalone = document.querySelector("#infoModalone");
let closeone = document.querySelector("#closeone");

const plus = document.querySelector(".plus");
let infoModaltwo = document.querySelector("#infoModaltwo");
let closetwo = document.querySelector("#closetwo");

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
