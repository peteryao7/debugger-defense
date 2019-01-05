import level1Words from "./level1";
import level2Words from "./level2";
import level3Words from "./level3";
import level4Words from "./level4";
import level5Words from "./level5";
import level6Words from "./level6";
import level7Words from "./level7";
import level8Words from "./level8";
import level9Words from "./level9";
import level10Words from "./level10";

export function getRandomWord(difficulty) {
  if (difficulty === 1) {
    return level1Words[Math.floor(Math.random() * level1Words.length)];
  } else if (difficulty === 2) {
    return level2Words[Math.floor(Math.random() * level2Words.length)];
  } else if (difficulty === 3) {
    return level3Words[Math.floor(Math.random() * level3Words.length)];
  } else if (difficulty === 4) {
    return level4Words[Math.floor(Math.random() * level4Words.length)];
  } else if (difficulty === 5) {
    return level5Words[Math.floor(Math.random() * level5Words.length)];
  } else if (difficulty === 6) {
    return level6Words[Math.floor(Math.random() * level6Words.length)];
  } else if (difficulty === 7) {
    return level7Words[Math.floor(Math.random() * level7Words.length)];
  } else if (difficulty === 8) {
    return level8Words[Math.floor(Math.random() * level8Words.length)];
  } else if (difficulty === 9) {
    return level9Words[Math.floor(Math.random() * level9Words.length)];
  } else if (difficulty === 10) {
    return level10Words[Math.floor(Math.random() * level10Words.length)];
  } else {
    return "BROKEN"
  }
};
