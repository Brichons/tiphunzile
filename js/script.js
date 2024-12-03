// Change the behavior of navbar on scroll action

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide FAQ answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // chnage icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// Show/hide menu
const menu = document.querySelector(".nav_menu");
const openMenuBtn = document.querySelector("#open_menu_btn");
const closeMenuBtn = document.querySelector("#close_menu_btn");

// open menu function
openMenuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeMenuBtn.style.display = "inline-block";
  openMenuBtn.style.display = "none";
});

// close menu function
closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  openMenuBtn.style.display = "inline-block";
  closeMenuBtn.style.display = "none";
});

// Register/Login code
const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

registerLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};
