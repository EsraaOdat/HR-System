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