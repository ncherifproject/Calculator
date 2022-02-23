const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent += e.target.textContent;
    });
});

equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
    result.textContent = "";
});