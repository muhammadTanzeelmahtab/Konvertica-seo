window.addEventListener("scroll", function () {
  if (scrollY > innerHeight - 60) {
    document.getElementsByClassName("navbar")[0].classList.add("fixed");
  } else {
    document.getElementsByClassName("navbar")[0].classList.remove("fixed");
  }
});

