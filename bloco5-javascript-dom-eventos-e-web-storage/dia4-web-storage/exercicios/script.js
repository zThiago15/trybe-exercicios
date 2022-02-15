const body = document.querySelector("body");
const paragraph = document.querySelector("p");

const inputBg = document.querySelector("#colorBg");
const addBgColor = document.querySelector("#addBgColor");

addBgColor.addEventListener("click", function () {
  localStorage.setItem("bgColor", inputBg.value);
  inputBg.value = "";
});

const inputText = document.querySelector("#colorText");
const addTextColor = document.querySelector("#addTextColor");

addTextColor.addEventListener("click", function () {
  localStorage.setItem("textColor", inputText.value);
  inputText.value = "";
});

const inputFontSizer = document.querySelector("#fontSize");
const addFontSize = document.querySelector("#addFontSize");
addFontSize.addEventListener("click", function () {
  localStorage.setItem("fontSize", inputFontSizer.value);
  inputFontSizer.value = "";
});

const inputLineHeight = document.querySelector("#lineHeight");
const addLineHeight = document.querySelector("#addLineHeight");
addLineHeight.addEventListener("click", function () {
  localStorage.setItem("lineHeight", inputLineHeight.value);
  inputLineHeight.value = "";
});

const inputFontFamily = document.querySelector("#fontFamily");
const addFontFamily = document.querySelector("#addFontFamily");
addFontFamily.addEventListener("click", function () {
  localStorage.setItem("fontFamily", inputFontFamily.value);
  inputFontFamily.value = "";
});

window.onload = function () {
  let corFundo = localStorage.getItem("bgColor");
  body.style.backgroundColor = corFundo;

  let corText = localStorage.getItem("textColor");
  paragraph.style.color = corText;

  let tamanhoFonte = localStorage.getItem("fontSize");
  paragraph.style.fontSize = `${tamanhoFonte}px`;

  let alturaLinha = localStorage.getItem("lineHeight");
  paragraph.style.lineHeight = alturaLinha;

  let familiaFonte = localStorage.getItem("fontFamily");
  paragraph.style.fontFamily = familiaFonte;
};
