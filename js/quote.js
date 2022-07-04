const quotes = [
    {
        quote:"당신의 힘이 속삼임에 불과할 때, 당신의 의지가 포효하지 않도록 하라.",
        author:"토마스 풀러(영국의 종교인이자 역사학자)",
    },
    {
        quote:"무언가를 열렬히 원한다면 그것을 얻기 위해 전부를 걸만큼의 배짱을 가져라.",
        author:"브렌단 프랜시스",
    },
    {
        quote:"인생은, 영혼을 살찌울 고귀한 모험을 하고자 하는 욕구의 투쟁이어야 한다.",
        author:"레베카 웨스트(작가. 대영제국 훈장을 두번이나 받았다.)",
    },
    {
        quote:"천재와 광인사이에는 아주 가느다란 선이 있다. 나는 이 선을 지웠다.",
        author:"오스카 레반트(피아니스트, 영화배우)",
    },
    {
        quote:"인생이 끝날까 두려워하지마라. 당신의 인생이 시작조차 하지 않을 수 있음을 두려워하라.",
        author:"그레이스 한센",
    },
    {
        quote:"절대 누군가에게서 희망을 빼앗지 말라. 가진 것의 전부일 수도 있으니.",
        author:"H. 잭슨 브라운 주니어",
    },
    {
        quote:"수정을 용납하지 않는 계획은 나쁜 계획이다.",
        author:"퍼블릴리어스 사이러스(기원전 1세기 시리아 출신의 로마 작가)",
    },
    {
        quote:"현재뿐 아니라 미래까지 걱정한다면 인생은 살 가치가 없을 것이다.",
        author:"윌리엄 서머셋 모옴",
    },
    {
        quote:"성공은 영원하지 않고, 실패는 치명적이지 않다.",
        author:"마이크 디트카(미국의 전직 풋볼 선수이자 감독)",
    },
    {
        quote:"주여, 제가 이룬 것보다 더 많은 것을 갈망하게 하소서",
        author:"미켈란젤로",
    },
]

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;