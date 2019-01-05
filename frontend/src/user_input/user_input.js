import level1Words from "./level1";

const parse = function() {
  const bugs = ["cat", "dog", "lizard", "elephant", "car"];

  document.getElementById("input").addEventListener("keydown", event => {
    for (let i = 0; i < bugs.length; i++) {
      for (let j = 0; j < bugs[i].length; j++) {
        if (bugs[i].charAt(j) === "$") {
          continue;
        } else if (event.key === bugs[i].charAt(j)) {
          bugs[i] = bugs[i].replace(bugs[i].charAt(j), "$");
        } else {
          break;
        }
        console.log(bugs);
      }
    }
  });
};

function getRandomWord() {
  return level1Words[Math.floor(Math.random() * level1Words.length)];
}

getRandomWord();
