const googleForm = document.querySelector("#google-form")
const mdnForm = document.querySelector("#mdn-form")
const w3schoolsForm = document.querySelector("#w3schools-form")


const naverBtn = document.querySelector("#naver")
const googleBtn = document.querySelector("#google")
const mdnBtn = document.querySelector("#mdn")
const w3schoolsBtn = document.querySelector("#w3schools")


const naverInput = document.querySelector("#naver-input")
const googleInput = document.querySelector("#google-input")
const mdnInput = document.querySelector("#mdn-input")
const w3schoolsInput = document.querySelector("#w3schools-input")



naverBtn.addEventListener("click", naverBtnClick);
googleBtn.addEventListener("click", googleBtnClick);
mdnBtn.addEventListener("click", mdnBtnClick);
w3schoolsBtn.addEventListener("click", w3schoolsBtnClick);

function naverInputSubmit(event){
    event.preventDefault();
    const searchItem = SearchInput.value;
    SearchInput.value ="";
    const naverurl = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${searchItem}`;
    window.open(naverurl);
}
function googleInputSubmit(event){
    event.preventDefault();
    const googleItem = googleInput.value;
    googleInput.value ="";
    const googleurl = `https://www.google.com/search?q=${googleItem}&sxsrf=ALiCzsaoPkUq__6IEVerZbYuzk4Ff6QSeg%3A1656671724145&source=hp&ei=7M2-YuSmBtrnwQPNhomADw&iflsig=AJiK0e8AAAAAYr7b_Gkj7FX96Dy4-gHn00YvLRirk8QE&ved=0ahUKEwjkzP-Mv9f4AhXac3AKHU1DAvAQ4dUDCAg&uact=5&oq=%ED%95%9C%EA%B5%AD&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyEQguEIAEELEDEIMBEMcBENEDMhQILhCABBCxAxCDARDHARDRAxDUAjIRCC4QgAQQsQMQgwEQxwEQowIyEQguEIAEELEDEIMBEMcBENEDMgsIABCABBCxAxCDATILCC4QgAQQsQMQgwEyCAgAEIAEELEDMgsILhCABBCxAxCDATIRCC4QgAQQsQMQgwEQxwEQrwE6DQguEIAEEMcBENEDEAo6BwgjEOoCECc6CAguEIAEELEDUABYgQxg1wxoAXAAeACAAa8BiAHWBZIBAzAuNpgBAKABAbABCg&sclient=gws-wiz`;
    window.open(googleurl);
}
function mdnInputSubmit(event){
    event.preventDefault();
    const mdnItem = mdnInput.value;
    mdnInput.value ="";
    const mdnurl = `https://developer.mozilla.org/ko/search?q=${mdnItem}`;
    window.open(mdnurl);
}
function w3schoolsInputSubmit(event){
    event.preventDefault();
    const w3schoolsItem = w3schoolsInput.value;
    w3schoolsInput.value ="";
    const w3schoolsurl = `https://www.w3schools.com/#gsc.tab=0&gsc.q=${w3schoolsItem}`;
    window.open(w3schoolsurl);
}


function naverBtnClick(){
    SearchForm.style.display = "flex";
    naverBtn.style.color = "#03dd61";
    googleForm.style.display = "none";
    googleBtn.style.color = "silver";
    mdnForm.style.display = "none";
    mdnBtn.style.color = "silver";
    w3schoolsForm.style.display = "none";
    w3schoolsBtn.style.color = "silver";
}
function googleBtnClick(){
    SearchForm.style.display = "none";
    naverBtn.style.color = "silver";
    googleForm.style.display = "flex";
    googleBtn.style.color = "#6e5ee7";
    mdnForm.style.display = "none";
    mdnBtn.style.color = "silver";
    w3schoolsForm.style.display = "none";
    w3schoolsBtn.style.color = "silver";
}
function mdnBtnClick(){
    SearchForm.style.display = "none";
    naverBtn.style.color = "silver";
    googleForm.style.display = "none";
    googleBtn.style.color = "silver";
    mdnForm.style.display = "flex";
    mdnBtn.style.color = "#8cb4ff";
    w3schoolsForm.style.display = "none";
    w3schoolsBtn.style.color = "silver";
}
function w3schoolsBtnClick(){
    SearchForm.style.display = "none";
    naverBtn.style.color = "silver";
    googleForm.style.display = "none";
    googleBtn.style.color = "silver";
    mdnForm.style.display = "none";
    mdnBtn.style.color = "silver";
    w3schoolsForm.style.display = "flex";
    w3schoolsBtn.style.color = "#04aa6d";
}

function handleSearchBar(){
    SearchForm.style.display = "none";
    naverBtn.style.color = "silver";
    googleForm.style.display = "none";
    googleBtn.style.color = "silver";
    mdnForm.style.display = "none";
    mdnBtn.style.color = "silver";
    w3schoolsForm.style.display = "none";
    w3schoolsBtn.style.color = "silver";
}
toDoInput.addEventListener("click", handleSearchBar)

SearchForm.addEventListener("submit", naverInputSubmit);
googleForm.addEventListener("submit", googleInputSubmit);
mdnForm.addEventListener("submit", mdnInputSubmit);
w3schoolsForm.addEventListener("submit", w3schoolsInputSubmit);


function handleSearchBarHidden(){
    header.classList.add("opacity");
}
window.addEventListener("scroll", handleSearchBarHidden)