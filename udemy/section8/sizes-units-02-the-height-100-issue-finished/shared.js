let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButton = document.querySelectorAll(".plan button");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = "open"; -> Override
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", () => {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
});

toggleButton.addEventListener("click", () => {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});

//backdrop.style["background-color"] = "red";
//backdrop.style.backgroundColor = "red";
