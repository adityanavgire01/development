const darkColorArr = [
    "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRadomIndex() {
    const randomIndex = Math.floor(darkColorArr.length * Math.random());
    return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroudnColor() {
    const color = darkColorArr[getRadomIndex()];

    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");

btn.onclick = changeBackgroudnColor;