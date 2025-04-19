const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  button.setAttribute("disabled", "");
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
    document
      .querySelector("i")
      .classList.replace("bx-cloud-download", "bx-check");
    document.querySelector("p").innerText = "Complete";
  }, 5000);
});
