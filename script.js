const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let buttonEl = document.querySelector('.button-el')
let resetBtn = document.querySelector('.reset-btn')

let fieldOne = document.querySelector(".field-one");
let fieldTwo = document.querySelector(".field-two");

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
    navigator.clipboard.writeText(fieldOne.textContent)
      .then(() => {
        fieldOne.textContent = "Copied!";
        setTimeout(generatePassword, 1000); // regenerate or restore after 1 sec
      })
      .catch(err => {
        console.error("Failed to copy password one:", err);
      });
  }
});

fieldTwo.addEventListener("click", () => {
  if (fieldTwo.textContent) {
    navigator.clipboard.writeText(fieldTwo.textContent)
      .then(() => {
        fieldTwo.textContent = "Copied!";
        setTimeout(generatePassword, 1000);
      })
      .catch(err => {
        console.error("Failed to copy password two:", err);
      });
  }
});

buttonEl.addEventListener('click', generatePassword)
resetBtn.addEventListener('click', reset)