const localStorageData = localStorage.getItem("usersData");

if (!localStorageData) {
  localStorage.setItem(
    "usersData",
    JSON.stringify([{ userName: "admin", password: "Admin1234**" }])
  );
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // To prevent page reload
  if (validateInputs()) {
    let userinfo = {
      userName: document.getElementById("userName").value,
      email: document.getElementById("email").value,
      password: btoa(document.getElementById("password").value),
    };
    let users = JSON.parse(localStorage.getItem("usersData"));

    const isRegisteredUser = users.filter(
      (user) => user.email == document.getElementById("email").value
    );
    if (!isRegisteredUser.length) {
      users.push(userinfo);
      localStorage.setItem("usersData", JSON.stringify(users));

      // Redirect to welcome page
      window.location.href = "login.html";
    } else {
      alert("User is already registered");
      return;
    }
  }
});

const seterror = (element, message) => {
  const element1 = document.querySelector(element);
  const inputcontrol = element1.parentElement;

  const errordisplay = inputcontrol.querySelector(".error");

  errordisplay.innerText = message;
  errordisplay.classList.add("showError");
  errordisplay.classList.remove("success");
};

const setsuccess = (element) => {
  const element1 = document.querySelector(element);
  const inputcontrol = element1.parentElement;
  const errordisplay = inputcontrol.querySelector(".error");

  errordisplay.innerText = "";
  errordisplay.classList.add("success");
  errordisplay.classList.remove("showError");
};

const isvalidemail = (Email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(Email).toLocaleLowerCase());
};

const isValidPassword = (password) => {
  const regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;

  return regex.test(password);
};

const validateInputs = () => {
  const form = document.getElementById("form");
  const userName = document.getElementById("userName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassowrd = document.getElementById("confirmPassowrd");

  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassowrd.value.trim();

  let validName = (validEmail = validPassword = validConfirmPassword = false);

  if (userNameValue === "") {
    seterror("#userName", "Username is required");
  } else {
    setsuccess("#userName");
    validName = true;
  }

  if (emailValue === "") {
    seterror("#email", "Email is required");
  } else if (!isvalidemail(emailValue)) {
    seterror("#email", "Provide a valid email address");
  } else {
    setsuccess("#email");
    validEmail = true;
  }

  if (passwordValue === "") {
    seterror("#password", "Password is required");
  } else if (!isValidPassword(passwordValue)) {
    seterror(
      "#password",
      "Password must contain at least 8 characters, 1 capital letter and 1 special character"
    );
  } else {
    setsuccess("#password");
    validPassword = true;
  }

  if (confirmPasswordValue === "") {
    seterror("#confirmPassowrd", "Please confirm your password");
  } else if (confirmPasswordValue !== passwordValue) {
    seterror("#confirmPassowrd", "Passwords don't match");
  } else {
    setsuccess("#confirmPassowrd");
    validConfirmPassword = true;
  }

  if (!validName || !validEmail || !validPassword || !validConfirmPassword) {
    return false;
  } else {
    return true;
  }
};
