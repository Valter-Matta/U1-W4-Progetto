document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const bottone = document.getElementById("bottone");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      bottone.classList.remove("spento");
      bottone.classList.add("acceso");
      if (checkbox.checked) {
        bottone.addEventListener("click", function () {
          window.location.href = "./benchmark_page.html";
        });
      }
    } else {
      bottone.classList.remove("acceso");
      bottone.classList.add("spento");
    }
  });
});
