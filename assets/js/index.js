"use strict";

//signIn
var accountSignIn = document.querySelector(".accountSignIn");
var passwordSignIn = document.querySelector(".passwordSignIn");
var sendSignIn = document.querySelector(".sendSignIn");
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
    } else {
      alert("此帳號不存在或帳號密碼錯誤！");
    }

    accountSignIn.value = "";
    passwordSignIn.value = "";
  })["catch"](function (error) {
    console.log(error);
  });
}
//# sourceMappingURL=index.js.map
