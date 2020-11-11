const allWords = [
  "ab",
  "Abend",
  "aber",
  "acht",
  "Affe",
  "alle",
  "allein",
  "als",
  "also",
  "alt",
  "am",
  "an",
  "andere",
  "anfangen",
  "Angst",
  "antworten",
  "Apfel",
  "Arbeit",
  "arbeiten",
  "Arzt",
  "auch",
  "auf",
  "Auge",
  "aus",

  "Auto",
  "baden",
  "bald",
  "Ball",
  "bauen",
  "Bauer",
  "Baum",
  "bei",
  "beide",
  "beim",
  "Bein",
  "Beispiel",
  "beißen",
  "bekommen",
  "Berg",
  "besser",
  "Bett",
  "Bild",
  "bin",
  "bis",
  "blau",
  "bleiben",
  "Blume",
  "Boden",
  "böse",
  "brauchen",
  "braun",
  "Brief",
  "bringen",
  "Brot",
  "Bruder",
  "Buch",

  "da",
  "dabei",
  "dafür",
  "damit",
  "danach",
  "dann",
  "daran",
  "darauf",
  "darin",
  "das",
  "dauern",
  "davon",
  "dazu",
  "dein",
  "dem",
  "den",
  "denken",
  "denn",
  "der",
  "deshalb",
  "dich",
  "dick",
  "die",
  "Ding",
  "dir",
  "doch",
  "Dorf",
  "dort",
  "draußen",
  "drehen",
  "drei",
  "dumm",
  "dunkel",
  "durch",
  "dürfen",

  "eigentlich",
  "ein",
  "einfach",
  "einige",
  "einigen",
  "einmal",
  "Eis",
  "Eltern",
  "Ende",
  "endlich",
  "er",
  "Erde",
  "erklären",
  "erschrecken",
  "erst",
  "erzählen",
  "es",
  "essen",
  "etwas",

  "fahren",
  "Fahrrad",
  "fährt",
  "fallen",
  "Familie",
  "fangen",
  "fast",
  "fehlen",
  "Fenster",
  "Ferien",
  "fertig",
  "fest",
  "Feuer",
  "fiel",
  "finden",
  "Finger",
  "Fisch",
  "Flasche",
  "fliegen",
  "Frage",
  "fragen",
  "Frau",
  "frei",
  "fressen",
  "Freude",
  "freuen",
  "Freund",
  "fröhlich",
  "früh",
  "früher",
  "führen",
  "fünf",
  "für",
  "Fuß",
  "Fußball",

  "gab",
  "ganz",
  "gar",
  "Garten",
  "geben",
  "Geburtstag",
  "gefährlich",
  "gegen",
  "gehen",
  "gehören",
  "gelb",
  "Geld",
  "genau",
  "gerade",
  "gern",
  "Geschenk",
  "Geschichte",
  "Gesicht",
  "gestern",
  "gesund",
  "gewinnen",
  "gibt",
  "ging",
  "Glas",
  "glauben",
  "gleich",
  "Glück",
  "glücklich",
  "Gott",
  "groß",
  "grün",
  "gut",

  "Haar",
  "haben",
  "halb",
  "halten",
  "Hand",
  "hängen",
  "hart",
  "Hase",
  "hat",
  "Haus",
  "heiß",
  "heißen",
  "helfen",
  "her",
  "heraus",
  "Herr",
  "Herz",
  "heute",
  "hier",
  "Hilfe",
  "Himmel",
  "hin",
  "hinein",
  "hinter",
  "hoch",
  "holen",
  "hören",
  "Hund",
  "Hunger",

  "ich",
  "ihm",
  "ihn",
  "ihr",
  "im",
  "immer",
  "ins",
  "ist",

  "ja",
  "Jahr",
  "jeder",
  "jetzt",
  "jung",
  "Junge",

  "kalt",
  "kam",
  "kann",
  "Katze",
  "kaufen",
  "kein",
  "kennen",
  "Kind",
  "Klasse",
  "klein",
  "klettern",
  "kochen",
  "kommen",
  "können",
  "Kopf",
  "krank",
  "Küche",
  "kurz",

  "lachen",
  "Land",
  "lang",
  "langsam",
  "las",
  "lassen",
  "laufen",
  "laut",
  "leben",
  "legen",
  "Lehrer",
  "Lehrerin",
  "leicht",
  "leise",
  "lernen",
  "lesen",
  "letzte",
  "Leute",
  "Licht",
  "lieb",
  "liegen",
  "ließ",
  "Loch",
  "los",
  "Luft",
  "lustig",

  "machen",
  "Mädchen",
  "mal",
  "man",
  "Mann",
  "Maus",
  "Meer",
  "mehr",
  "mein",
  "Mensch",
  "merken",
  "mich",
  "Milch",
  "Minute",
  "mir",
  "mit",
  "mögen",
  "möglich",
  "Monat",
  "müde",
  "Musik",
  "müssen",
  "Mutter",

  "nach",
  "nächste",
  "Nacht",
  "nah",
  "Name",
  "nämlich",
  "Nase",
  "nass",
  "natürlich",
  "neben",
  "nehmen",
  "nein",
  "nennen",
  "neu",
  "neun",
  "nicht",
  "nichts",
  "nie",
  "nimmt",
  "noch",
  "nun",
  "nur",

  "ob",
  "oben",
  "oder",
  "offen",
  "öffnen",
  "oft",
  "ohne",
  "Oma",
  "Onkel",
  "Opa",

  "packen",
  "Pferd",
  "Platz",
  "plötzlich",
  "Polizei",

  "Rad",
  "rechnen",
  "reich",
  "reiten",
  "rennen",
  "richtig",
  "rot",
  "rufen",
  "ruhig",
  "rund",

  "Sache",
  "sagen",
  "schaffen",
  "schauen",
  "scheinen",
  "schenken",
  "schicken",
  "Schiff",
  "schlafen",
  "schlagen",
  "schlecht",
  "schlimm",
  "Schluss",
  "Schnee",
  "schnell",
  "schon",
  "schön",
  "schreiben",
  "schreien",
  "Schuh",
  "Schule",
  "Schüler",
  "schwarz",
  "schwer",
  "Schwester",
  "schwimmen",
  "sechs",
  "See",
  "sehen",
  "sehr",
  "sein",
  "seit",
  "Seite",
  "selbst",
  "setzen",
  "sich",
  "sicher",
  "sie",
  "sieben",
  "sieht",
  "sind",
  "singen",
  "sitzen",
  "so",
  "sofort",
  "Sohn",
  "sollen",
  "Sommer",
  "Sonne",
  "Sonntag",
  "sonst",
  "Spaß",
  "spät",
  "später",
  "Spiel",
  "spielen",
  "sprechen",
  "springen",
  "Stadt",
  "stark",
  "stehen",
  "steigen",
  "Stein",
  "Stelle",
  "stellen",
  "Straße",
  "Stück",
  "Stunde",
  "suchen",

  "Tag",
  "Tante",
  "Teller",
  "tief",
  "Tier",
  "Tisch",
  "tot",
  "tragen",
  "traurig",
  "treffen",
  "trinken",
  "tun",
  "Tür",
  "turnen",

  "über",
  "überall",
  "Uhr",
  "um",
  "und",
  "uns",
  "unser",
  "unten",
  "unter",

  "Vater",
  "vergessen",
  "verkaufen",
  "verlieren",
  "verstecken",
  "verstehen",
  "versuchen",
  "viel",
  "vielleicht",
  "vier",
  "Vogel",
  "voll",
  "vom",
  "von",
  "vor",
  "vorbei",

  "Wagen",
  "wahr",
  "Wald",
  "war",
  "warm",
  "warten",
  "warum",
  "was",
  "waschen",
  "Wasser",
  "weg",
  "Weg",
  "Weihnachten",
  "weil",
  "weinen",
  "weiß",
  "weit",
  "weiter",
  "Welt",
  "wenig",
  "wenn",
  "wer",
  "werden",
  "werfen",
  "Wetter",
  "wichtig",
  "wie",
  "wieder",
  "Wiese",
  "will",
  "Winter",
  "wir",
  "wird",
  "wirklich",
  "wissen",
  "wo",
  "Woche",
  "wohl",
  "wohnen",
  "Wohnung",
  "wollen",
  "Wort",
  "wünschen",

  "Zahl",
  "zehn",
  "zeigen",
  "Zeit",
  "Zeitung",
  "ziehen",
  "Zimmer",
  "zu",
  "Zug",
  "zum",
  "zur",
  "zurück",
  "zusammen",
  "zwei",
  "zwischen",
];

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
