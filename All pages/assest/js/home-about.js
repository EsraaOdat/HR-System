let btn = document.getElementById("btn");
window.onscroll = function () {
  if (scrollY > 700) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
