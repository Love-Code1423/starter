const title = document.querySelector("h1");
title.addEventListener("click", function () {
  if (title.textContent === "Hello World !") {
    title.textContent = "Hello JavaScript!";
  } else {
    title.textContent = "Hello world !";
  }
});
