// ativa modo estrito -> evitar erros silencioso
"use strict";

const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  // remove ou adiciona, observa respectivamente com false e true
  var themeObserver = document.body.classList.toggle("dark-theme");

  var className = document.body.className;
  if (themeObserver) {
    this.textContent = "Light";
  } else {
    this.textContent = "Dark";
  }
  console.log("classe atual: " + className);
});
