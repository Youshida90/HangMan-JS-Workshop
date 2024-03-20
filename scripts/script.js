const words = [
  "java",
  "c++",
  "javascript",
  "Flutter",
  "Dart",
  "Swift",
  "Kotlin",
  "ObjectveC",
  "Python",
  "Ruby",
  "Go",
  "Rust",
  "C#",
  "PHP",
  "HTML",
  "CSS",
  "SQL",
  "R",
  "TypeScript",
  "Assembly",
  "Shell",
  "PowerShell",
  "Perl",
  "Lua",
  "Scala",
  "Haskell",
  "Groovy",
  "Matlab",
  "Julia",
  "Erlang",
  "Clojure",
  "F#",
  "Racket",
  "Elixir",
  "Elm",
  "Crystal",
  "Nim",
  "D",
  "COBOL",
  "Fortran",
  "Ada",
  "Lisp",
  "Prolog",
  "Scheme",
  "Smalltalk",
  "Dylan",
  "Eiffel",
  "Oberon",
  "Modula",
  "Simula",
  "Sather",
  "SNOBOL",
  "Icon",
  "BCPL",
  "PL/I",
];
const answerSection = document.getElementById("answer-section");

const letters = document.querySelectorAll(".letter");

let selectedword = " ";

const pressed = [];

window.addEventListener("keypress", (e) => {
  const pressedKey = e.key;
  answerSection.innerHTML = " ";
  letters.forEach((letters) => {
    if (pressedKey.toUpperCase() == letters.innerHTML) {
      letters.classList.add("pressed");
    }
  });
  for (let i = 0; i < selectedword.length; i++) {
    const character = selectedword[i];
    for (let j = 0; j < pressed.length; j++) {
      if (pressedKey == character || selectedword.includes(pressed[j])) {
        pressed.push(character);
        answerSection.innerHTML += character;
      } else {
        answerSection.innerHTML += " __ ";
      }
    }
  }
});

const genrate = () => {
  const randomIndex = Math.floor(Math.random() * words.length);

  selectedword = words[randomIndex];

  for (let i = 0; i < selectedword.length; i++) {
    answerSection.innerHTML += " __ ";
  }
};

genrate();
