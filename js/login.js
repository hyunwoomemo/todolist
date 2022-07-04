const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const wrapper = document.querySelector("#wrapper");
const SearchBtn = document.querySelector("#searchbtn");
const SearchForm = document.querySelector("#search-form");
const SearchInput = document.querySelector("#search-form input");

function LoginFormSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginInput.value = "";
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello, ${username} 🔥`;
    localStorage.setItem("username",username);
    wrapper.classList.remove("hidden");
    wrapper.classList.add("momentum_app");
    header.appendChild(greeting);
    greeting.classList.add("greetingmove");
    header.classList.remove("hidden");
}

const savedUserName = localStorage.getItem("username");

if(savedUserName === null) {
    loginForm.classList.remove("hidden");
    greeting.classList.add("hidden");
    wrapper.classList.add("hidden");
    wrapper.classList.remove("momentum_app");
    SearchForm.classList.add("hidden");
    header.classList.add("hidden");
} else { 
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.classList.add("arrive");
    greeting.innerText = `Hello, ${savedUserName} 🔥`;
    wrapper.classList.remove("hidden");
    wrapper.classList.remove("hidden");
    wrapper.classList.add("momentum_app");
    header.appendChild(greeting);
    greeting.classList.add("greetingmove");
    header.classList.remove("hidden");
}

function handleGreetingClick(){
    location.reload();
}

greeting.addEventListener("click", handleGreetingClick)

loginForm.addEventListener("submit", LoginFormSubmit)