/* const clock = document.querySelector("#clock");
const love = new Date("2021,08,15");
const now = new Date();
const gap = love-now;
const withLove = Math.abs(Math.floor((gap) / (1000 * 60 * 60 * 24)));

dDay.innerText = `D-DAY 설정 추가 예정`

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();
setInterval(getClock,1000);
 */

const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const months = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `오늘은 ${months}월 ${day}일🕐${hours}시 ${minutes}분입니다`;
}

getClock();
setInterval(getClock,1000);
console.log(getClock);