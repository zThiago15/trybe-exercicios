const generateRandomNumber = () => {
  return Math.floor(Math.random() * 101);
}

const capitalizeLetters = (word) => {
  return word.toUpperCase();
}

const firstLetter = (word) => {
  return word[0];
}

const joiningWords = (word1, word2) => {
  return word1 + word2;
}

module.exports = { generateRandomNumber, capitalizeLetters, firstLetter, joiningWords };