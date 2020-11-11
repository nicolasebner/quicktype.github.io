import * as Words from "/word-arrays.js";

const allWords = Words.german;

const row1 = document.querySelector(".row1");
const inputField = document.querySelector(".inputfield");
const timerField = document.querySelector(".timer");
const reloadButton = document.querySelector(".reload-btn");
const results = document.querySelector(".results");

let currentPosition = 0;
let currentInput = "";
let amountOfCorrectKeysPressed = 0;
let amountOfWrongKeysPressed = 0;
let amountOfCorrectWords = 0;
let amountOfWrongWords = 0;
let moveUpLineValue = 0;
let secondsLeft = 60;
let interval;
let resultHTMLString = "";

renderNewRow1();
inputField.focus();

function resetAllValues() {
  clearInterval(interval);
  timerField.textContent = "1:00";
  currentPosition = 0;
  currentInput = 0;
  amountOfCorrectKeysPressed = 0;
  amountOfWrongKeysPressed = 0;
  amountOfCorrectWords = 0;
  amountOfWrongWords = 0;
  moveUpLineValue = 0;
  secondsLeft = 60;

  inputField.value = "";
  inputField.disabled = false;

  renderNewRow1();
  moveUpOneLine(0);

  inputField.focus();
}

function renderNewRow1() {
  shuffle(allWords);
  let str = "";
  for (let i = 0; i < 200; i++) {
    str += `<span class="el${i}">${allWords[i]}</span>\n`;
  }
  row1.innerHTML = str;
}

// renderCurrentStatus();

inputField.addEventListener("input", function (e) {
  const curElement = document.querySelector(`.el${currentPosition}`);
  const nextElement = document.querySelector(`.el${currentPosition + 1}`);

  currentInput = e.target.value;

  //countdown Starten
  if (currentPosition === 0 && currentInput.length === 1) {
    startCounddown();
  }

  //Wort mit Leertaste bestätigt
  if (currentInput.slice(-1) === " ") {
    currentInput = currentInput.slice(0, -1);

    const rectTopDifferenze =
      curElement.getBoundingClientRect().top -
      nextElement.getBoundingClientRect().top;

    if (rectTopDifferenze !== 0) moveUpOneLine(rectTopDifferenze);

    //add class after word logged in with spacebar
    if (currentInput === allWords[currentPosition]) {
      //if it start with capital letter, add 1 extra
      if (currentInput[0] === currentInput[0].toUpperCase()) {
        amountOfCorrectKeysPressed++;
      }

      amountOfCorrectKeysPressed += currentInput.length;
      amountOfCorrectWords++;
      curElement.classList.add("correct");
    } else {
      amountOfWrongKeysPressed += currentInput.length;
      amountOfWrongWords++;
      curElement.classList.add("wrong");
    }

    //reset values
    inputField.value = "";
    currentInput = "";

    currentPosition++;
  }
  renderCurrentHighlightStatus();
});

reloadButton.addEventListener("click", resetAllValues);

function renderCurrentHighlightStatus() {
  const curElement = document.querySelector(`.el${currentPosition}`);
  //add correct highlight
  if (!checkIfCurrentInputEqualsWord()) {
    curElement.classList.add("highlight-wrong");
    curElement.classList.remove("highlight");
  } else {
    curElement.classList.remove("highlight-wrong");
    curElement.classList.add("highlight");
  }

  //remove highlight from word before
  if (currentPosition > 0) {
    document
      .querySelector(`.el${currentPosition - 1}`)
      .classList.remove("highlight", "highlight-wrong");
  }
}

function checkIfCurrentInputEqualsWord() {
  //if (currentInput.length === 0) return true;
  return (
    allWords[currentPosition].substring(0, currentInput.length) === currentInput
  );
}

function moveUpOneLine(height) {
  moveUpLineValue += height;
  row1.setAttribute("style", `top: ${moveUpLineValue}px`);
}

function startCounddown(stop = false) {
  if (stop) {
    clearInterval();
  }

  interval = setInterval(function () {
    if (secondsLeft <= 0) {
      clearInterval(interval);
      inputField.disabled = true;

      resultHTMLString =
        `<result-component correct-keys="${amountOfCorrectKeysPressed}" wrong-keys="${amountOfWrongKeysPressed}" correct-words="${amountOfCorrectWords}" wrong-words="${amountOfWrongWords}"></result-component>\n` +
        resultHTMLString;

      results.innerHTML = resultHTMLString;

      return;
    }

    secondsLeft--;
    timerField.textContent = `0:${secondsLeft.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    })}`;
  }, 1000);
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
