var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header__menu").style.top = "0";
  } else {
    document.getElementById("header__menu").style.top = "-12rem";
  }
  prevScrollpos = currentScrollPos;
};
