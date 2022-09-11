"use strict";

//signIn
var accountSignIn = document.querySelector(".accountSignIn");
var passwordSignIn = document.querySelector(".passwordSignIn");
var sendSignIn = document.querySelector(".sendSignIn");
var forgot = document.querySelector(".forgot");
var infoModalforgot = document.querySelector("#infoModalforgot");
var closeforgot = document.querySelector("#closeforgot");
var forgotsend = document.querySelector(".forgotsend");
var time = 10; //到計時10秒

sendSignIn.addEventListener("click", function (e) {
  callSignIn();
});

function callSignIn() {
  if (accountSignIn.value === "" || passwordSignIn.value === "") {
    alert("請輸入正確資料");
    return;
  }

  var obj_2 = {};
  obj_2.email = accountSignIn.value;
  obj_2.password = passwordSignIn.value;
  console.log(obj_2);
  axios.post("https://hexschool-tutorial.herokuapp.com/api/signin", obj_2).then(function (response) {
    if (response.data.message === "登入成功") {
      alert("登入成功");
      location.href = "./home.html";
    } else {
      alert("此帳號不存在或帳號密碼錯誤！");
    }

    accountSignIn.value = "";
    passwordSignIn.value = "";
  })["catch"](function (error) {
    console.log(error);
  });
}

forgot.addEventListener("click", function (e) {
  infoModalforgot.showModal();
  e.preventDefault();
});
closeforgot.addEventListener("click", function (e) {
  infoModalforgot.close();
  e.preventDefault();
});
forgotsend.addEventListener("click", function (e) {
  forgotsend.disabled = "true";
  var timer = setInterval(function () {
    if (time == 0) {
      clearInterval(timer);
      forgotsend.disabled = false;
      forgotsend.innerHTML = "發送驗證碼";
      time = 10;
    } else {
      forgotsend.innerHTML = "\u9084\u5269\u4E0B".concat(time, "\u79D2");
      time--;
    }
  }, 1000);
});
//# sourceMappingURL=index.js.map
