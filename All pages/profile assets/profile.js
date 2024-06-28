async function loadProfile() {
  try {
    // حاول الحصول على البيانات من localStorage
    const storedData = localStorage.getItem("profileData");

    let user;
    if (storedData) {
      // إذا كانت البيانات موجودة، قم بتحميلها من localStorage
      user = JSON.parse(storedData);
      console.log("Data loaded from localStorage:", user);
    } else {
      // إذا لم تكن البيانات موجودة، قم بتحميلها من users.json
      const response = await fetch("profile assets/users.json");
      const data = await response.json();

      // ابحث عن المستخدم الذي حسابه HR وقم بتخزين بياناته في localStorage
      for (let i = 0; i < data.users.length; i++) {
        const currentUser = data.users[i];
        if (currentUser.account.is_hr) {
          user = currentUser;
          console.log("HR User Data:", user);
          localStorage.setItem("profileData", JSON.stringify(user));
          break;
        }
      }
    }

    if (user) {
      updateProfile(user);
    }
  } catch (error) {
    console.error("Error loading profile data:", error);
  }
}

function updateProfile(user) {
  // استرجاع المعلومات من local storage
  const loggedInUser = localStorage.getItem("loggedInUser");

  // تحويل النص إلى كائن JSON
  const userObject = JSON.parse(loggedInUser);

  // الوصول إلى البيانات
  // const userName = userObject.userName;
  // const email = userObject.email;

  // console.log("اسم المستخدم:", userName);
  // console.log("البريد الإلكتروني:", email);

  document.getElementById("first_name").innerText = userObject.userName;
  document.getElementById("profileEmail").innerText = userObject.email;

  // document.getElementById('profilePhoto').src = user.personal_information.img;
  // document.getElementById('profilePicture').src = user.personal_information.img;
  document.getElementById("profileId").innerText = user.personal_information.id;
  document.getElementById("profilePhone").innerText =
    user.personal_information.phone;
  document.getElementById("profileAddress").innerText =
    user.personal_information.address;
  document.getElementById("profileCountry").innerText =
    user.personal_information.country;
  document.getElementById("profileCity").innerText =
    user.personal_information.city;

    const educationContainer = document.getElementById("profileEducation");
    educationContainer.innerHTML = "";
    
    user.education.reverse().forEach((edu) => {
      const eduDiv = document.createElement("div");
      eduDiv.innerHTML = `<span>${edu.date}</span><p>${edu.description}</p>`;
      educationContainer.appendChild(eduDiv);
    });
    
  document.getElementById("jobTitle").innerText = user.job.job_title;
  document.getElementById("jobTitle1").innerText = user.job.job_title;
  document.getElementById("department").innerText = user.job.department;
  document.getElementById("department1").innerText = user.job.department;
  document.getElementById("employeeType").innerText = user.job.employee_type;
  document.getElementById("employeeType1").innerText = user.job.employee_type;
  document.getElementById("startDate").innerText = user.job.start_date;
  document.getElementById("contractEndDate").innerText =
    user.job.contract_end_date;
  document.getElementById("lineManager").innerText = user.job.line_manager;
}

// استرجاع المعلومات من local storage
const loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
  const userObject = JSON.parse(loggedInUser);

  const userName = userObject.userName;
  const email = userObject.email;

  console.log("اسم المستخدم:", userName);
  console.log("البريد الإلكتروني:", email);

  document.getElementById("first_name").innerText = userObject.userName;
  document.getElementById("profileEmail").innerText = userObject.email;
}

// تنفيذ تحميل الملف
loadProfile();
console.log(localStorage.getItem("profileData"));
