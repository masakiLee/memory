const accountSignUp = document.querySelector(".accountSignUp");
const passwordSignUp = document.querySelector(".passwordSignUp");
const sendSignUp = document.querySelector(".sendSignUp");

sendSignUp.addEventListener("click", function (e) {
  callSignUp();
});

function callSignUp() {
  if (accountSignUp.value === "" || passwordSignUp.value === "") {
    alert("請輸入正確資訊");
    return;
  }
  let obj = {};
  obj.email = accountSignUp.value;
  obj.password = passwordSignUp.value;
  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signup", obj)
    .then(function (response) {
      if (response.data.message === "帳號註冊成功") {
        alert("恭喜帳號註冊成功");
      } else {
        alert("帳號註冊失敗，有可能有人用你的email註冊！");
      }
      accountSignUp.value = "";
      passwordSignUp.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
}
