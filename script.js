import { characters } from "./data.js";

let buttonEl = document.querySelector(".button-el");
let resetBtn = document.querySelector(".reset-el");
let fieldOne = document.querySelector(".field-one");
let fieldTwo = document.querySelector(".field-two");
let copiedText = document.querySelector(".copied-el");

function reset() {
  fieldOne.textContent = "";
  fieldTwo.textContent = "";
}

function generatePassword() {
  let passwordOne = "";
  let passwordTwo = "";
  let passwordlength = 15;
  for (let i = 0; i < passwordlength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    passwordOne += characters[randomIndex];
    passwordTwo += characters[randomIndex2];
    fieldOne.textContent = passwordOne;
    fieldTwo.textContent = passwordTwo;
  }
}

fieldOne.addEventListener("click", () => {
  if (fieldOne.textContent) {
    navigator.clipboard
      .writeText(fieldOne.textContent)
      .then(() => {
        copiedText.innerHTML = `
        <p class="copied-text">Copied!</p>
        `;
        setTimeout(() => {
          copiedText.innerHTML = "";
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy password one:", err);
      });
  }
});

fieldTwo.addEventListener("click", () => {
  if (fieldTwo.textContent) {
    navigator.clipboard
      .writeText(fieldTwo.textContent)
      .then(() => {
        copiedText.innerHTML = `
        <p class="copied-text">Copied!</p>
        `;
        setTimeout(() => {
          copiedText.innerHTML = "";
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy password one:", err);
      });
  }
});

buttonEl.addEventListener("click", generatePassword);
resetBtn.addEventListener("click", reset);
