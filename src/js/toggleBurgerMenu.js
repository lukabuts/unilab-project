const burgerBtn = document.getElementById("burger-btn");
const mobileNavbarDialog = document.getElementById("mobile-navbar-dialog");
const mobileNavbar = document.getElementById("mobile-navbar");
const exitBtn = document.getElementById("exitBtn");

/* Open function */
burgerBtn.addEventListener("click", function () {
  mobileNavbar.classList.contains("closed") &&
    mobileNavbar.classList.remove("closed");
  mobileNavbarDialog.showModal();
  body.style.overflow = "hidden";
});

/* Close function triggers */
exitBtn.addEventListener("click", exitNavbar);
window.addEventListener("resize", () => {
  if (window.innerWidth >= 490) exitNavbar();
});

mobileNavbarDialog.addEventListener("click", (e) => {
  if (e.clientX > mobileNavbar.clientWidth) {
    exitNavbar();
  }
});

/* Exiting mobile-nav menu */
function exitNavbar() {
  setTimeout(() => {
    mobileNavbarDialog.close();
  }, 500);
  !mobileNavbar.classList.contains("closed") &&
    mobileNavbar.classList.add("closed");
  body.style.overflow = "scroll";
}
