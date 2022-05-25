const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item) => {
  item.addEventListener("click", () => {
    removeClassActive();
    item.classList.add("active");
  });
});

function removeClassActive() {
  accordion.forEach((item) => {
    item.classList.remove("active");
  });
}
