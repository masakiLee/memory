//signIn
const accountSignIn = document.querySelector(".accountSignIn");
const passwordSignIn = document.querySelector(".passwordSignIn");
const sendSignIn = document.querySelector(".sendSignIn");
const forgot = document.querySelector(".forgot");
const infoModalforgot = document.querySelector("#infoModalforgot");
const closeforgot = document.querySelector("#closeforgot");
const forgotsend = document.querySelector(".forgotsend");
let time = 10; //到計時10秒

sendSignIn.addEventListener("click", function (e) {
  callSignIn();
});

function callSignIn() {
  if (accountSignIn.value === "" || passwordSignIn.value === "") {
    alert("請輸入正確資料");
    return;
  }
  let obj_2 = {};
  obj_2.email = accountSignIn.value;
  obj_2.password = passwordSignIn.value;
  console.log(obj_2);
  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signin", obj_2)
    .then(function (response) {
      if (response.data.message === "登入成功") {
        alert("登入成功");
        location.href = "./home.html";
      } else {
        alert("此帳號不存在或帳號密碼錯誤！");
      }
      accountSignIn.value = "";
      passwordSignIn.value = "";
    })
    .catch(function (error) {
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
      forgotsend.innerHTML = `還剩下${time}秒`;
      time--;
    }
  }, 1000);
});
