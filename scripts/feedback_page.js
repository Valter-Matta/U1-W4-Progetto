const review = document.querySelectorAll(".star");
review.forEach((star, index1) => {
  star.addEventListener("click", () => {
    review.forEach((star, index2) => {
      const icone = star.querySelector("i");
      if (index2 <= index1) {
        icone.classList.add("attiva");
      } else {
        icone.classList.remove("attiva");
      }
    });
  });
});

const form = document.getElementById("button");

form.addEventListener("click", (event) => {
  event.preventDefault();
  setTimeout(function () {
    window.location.href = "./welcome_page.html";
  }, 500);
});
