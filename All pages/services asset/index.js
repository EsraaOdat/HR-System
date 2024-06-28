// //s
// //nav bar code
// document.addEventListener("DOMContentLoaded", () => {
//   // Check the login status on page load
//   const isLoggedIn = localStorage.usersData;
//   checkLoginStatus(isLoggedIn);
//   if (localStorage.message) {
//     const toastTrigger = document.getElementById("liveToastBtn");
//     const toastLiveExample = document.getElementById("liveToast");

//     const toastBootstrap =
//       bootstrap.Toast.getOrCreateInstance(toastLiveExample);
//     document.getElementById("message").innerText = localStorage.message;
//     localStorage.removeItem("message");
//     toastBootstrap.show();
//   }
// });

// function checkLoginStatus(isLoggedIn) {
//   if (isLoggedIn) {
//     document.getElementById("service").style.display = "block";
//     document.getElementById("profile-info").style.display = "block";
//     document.getElementById("login").style.display = "none";
//     document.getElementById("register").style.display = "none";
//     document.getElementById("logout").style.display = "block";
//   } else {
//     document.getElementById("service").style.display = "none";
//     document.getElementById("profile-info").style.display = "none";
//     document.getElementById("login").style.display = "block";
//     document.getElementById("register").style.display = "block";
//     document.getElementById("logout").style.display = "none";
//   }
// }

// function login() {
//   // Simulate a login process
//   localStorage.setItem("loggedIn", "true");
//   // const username = "JohnDoe";
//   checkLoginStatus(true);
//   // showWelcomeMessage(username);
//   localStorage.message = "";
//   let x = JSON.parse(localStorage.usersData).find(
//     (user) => user.email === localStorage.userEmail
//   );
//   console.log(x);
// }

// function logout() {
//   // Simulate a logout process without deleting user data
//   localStorage.setItem("loggedIn", "false");
//   checkLoginStatus(false);
// }
// document.getElementById("logout").addEventListener("click", logout);

////// end of code
// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Collapse });
