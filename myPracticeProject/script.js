const name = prompt("What is your name?");

const hello = document.querySelector("#hello");
const button = document.querySelector("#button");

let isJavaScript = false;

if (name) {
    hello.textContent = "Hello, " + name;
} else {
    hello.textContent = "Hello, stranger!";
}

button.addEventListener("click", function () {
    if (isJavaScript === false) {
        hello.textContent = "Hello, JavaScript!";
        isJavaScript = true;
    } else {
        if (name) {
            hello.textContent = "Hello, " + name;
        } else {
            hello.textContent = "Hello, stranger!";
        }

        isJavaScript = false;
    }
});
