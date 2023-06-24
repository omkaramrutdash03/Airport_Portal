const email = document.getElementById("email");
const pass = document.getElementById("password");

function findUser() {
  fetch("http://localhost:8000/myData", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const user = data.find(
        (el) => el.email === email.value && el.password === pass.value
      );
      console.log(user);
      if (user) {
        alert("Logged in Successfully"); 
        call1();
      } else {
        alert('invalid credentials');
      }
    });
  console.log(data);
}
function call(){
  window.location.href = "./assign.html";
}
function call1(){
  window.location.href = "./details.html";
}