document.addEventListener('DOMContentLoaded', () => {
    // Check the login status on page load
    const isLoggedIn = false;
    checkLoginStatus(isLoggedIn);
});

function checkLoginStatus(isLoggedIn) {
    if (isLoggedIn) {
        document.getElementById('service').style.display = 'block';
        document.getElementById('profile-info').style.display = 'block';
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    } else {
        document.getElementById('service').style.display = 'none';
        document.getElementById('profile-info').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    }
}

function login() {
    // Simulate a login process
    localStorage.setItem('loggedIn', 'true');
    const username = "JohnDoe"; 
    checkLoginStatus(true);
    showWelcomeMessage(username);
}

function logout() {
    // Simulate a logout process
    localStorage.removeItem('loggedIn');
    checkLoginStatus(false);
}

// document.addEventListener('DOMContentLoaded', () => {
//     // Check the login status on page load
    
//     const isLoggedIn = (localStorage.getItem('loggedIn') === 'true');
    
//     checkLoginStatus(isLoggedIn);
// });

// function checkLoginStatus(isLoggedIn) {
//     if (isLoggedIn) {
//         document.getElementById('service').style.display = 'block';
//         document.getElementById('profile-info').style.display = 'block';
//         document.getElementById('login').style.display = 'none';
//         document.getElementById('register').style.display = 'none';
//         document.getElementById('logout').style.display = 'block';
//     } else {
//         document.getElementById('service').style.display = 'none';
//         document.getElementById('profile-info').style.display = 'none';
//         document.getElementById('login').style.display = 'block';
//         document.getElementById('register').style.display = 'block';
//         document.getElementById('logout').style.display = 'none';
//     }
// }

// function login() {
//     // Simulate a login process
//     localStorage.setItem('loggedIn', 'true');
//     const username = "JohnDoe"; 
//     checkLoginStatus(true);
//     showWelcomeMessage(username); // اظهار رسالة الترحيب
// }

// function logout() {
//     // Simulate a logout process
//     localStorage.removeItem('loggedIn');
//     checkLoginStatus(false);
// }

// function showWelcomeMessage(username) {
//     const welcomeMessage = document.createElement('div');
//     welcomeMessage.textContent = `Welcome, ${username}!`; // رسالة الترحيب تحتوي على اسم المستخدم
//     welcomeMessage.className = 'welcome-message'; // اختيار التنسيق المناسب
//     document.body.appendChild(welcomeMessage); // إضافة رسالة الترحيب إلى الصفحة
// }

// function showWelcomeMessage(username) {
//     // Display a welcome message alert
//     alert(`Welcome, ${username}! You have successfully logged in.`);
// }


let btn=document.getElementById('btn')
            window.onscroll=function(){
                if(scrollY>700){
                    btn.style.display='block';
                }
                else{
                    btn.style.display='none';
                }
            }
            btn.onclick=function(){
                scroll({
                    top:0,
                    left:0,
                    behavior:'smooth',
                })
            }