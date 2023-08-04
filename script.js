const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});
