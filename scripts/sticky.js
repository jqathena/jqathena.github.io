let offset = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  var navbar = document.getElementById("nav");
  offset = navbar.offsetTop;
});

window.onscroll = function () {
  var navbar = document.getElementById("nav");
  if (navbar != null) {
    var sticky = navbar.offsetTop;
    console.log(navbar.offsetTop);
    console.log(window.scrollY);
    if (window.scrollY < offset) {
      navbar.classList.remove("sticky");
    } else if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
};
