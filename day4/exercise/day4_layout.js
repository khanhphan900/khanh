const bars = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");

bars.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const optionsBtn = document.querySelectorAll(".option-btn");

optionsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    optionsBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
