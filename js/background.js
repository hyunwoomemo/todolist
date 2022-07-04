const darkBtn = document.querySelector("#darkmode");
const emoji = document.querySelector("#emoji");
const checkBox = document.querySelector(".check");

const isUserColorTheme = localStorage.getItem("color-theme");
const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

window.onload = function() {
    if (isUserColorTheme === "dark") {
        localStorage.setItem("color-theme", "dark");
        document.documentElement.setAttribute("color-theme", "dark");
        checkBox.setAttribute("checked", true);
    } else if (isUserColorTheme === "light") {
        localStorage.setItem("color-theme", "light");
        document.documentElement.setAttribute("color-theme", "light");
    } else if (isOsColorTheme === "dark") {
        localStorage.setItem("color-theme", "dark");
        document.documentElement.setAttribute("color-theme", "dark");
        checkBox.setAttribute("checked", true);
    } else if (isOsColorTheme === "light") {
        localStorage.setItem("color-theme", "light");
        document.documentElement.setAttribute("color-theme", "light");
    }
};

function handleDarkMode(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("color-theme", "dark");
        darkBtn.classList.remove("hidden");
        localStorage.setItem("color-theme", "dark");
        emoji.innerText = "🌙";
    } else {
        document.documentElement.setAttribute("color-theme", "light");
        darkBtn.classList.remove("hidden");
        localStorage.setItem("color-theme", "light");
        emoji.innerText = "☀️";
    }
};

checkBox.addEventListener("click", handleDarkMode)