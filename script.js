// Fade animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Product zoom effect
const device = document.getElementById("device");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  device.style.transform = `scale(${1 + scroll / 3000})`;
});