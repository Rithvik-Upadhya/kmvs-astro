let lastScrollTop = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  header.style["--hedaerH"] = `${headerHeight}px`;
});

window.addEventListener("scroll", () => debounce(scrollCheck, 200));

function scrollCheck() {
  let scrollTop = window.scrollY;
  const header = document.querySelector("header");

  scrollTop > 0
    ? header.classList.add("scrolling")
    : header.classList.remove("scrolling");

  scrollTop > 300
    ? header.classList.add("auto-hide")
    : header.classList.remove("auto-hide");

  if (scrollTop > lastScrollTop && scrollTop > 300) {
    header.classList.remove("up");
    header.classList.add("down");
  } else if (scrollTop < lastScrollTop && scrollTop > 300) {
    header.classList.remove("down");
    header.classList.add("up");
  } else {
    header.classList.remove("up");
    header.classList.remove("down");
  }
  lastScrollTop = scrollTop;
}

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
