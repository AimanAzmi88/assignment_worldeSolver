
// get list of all 5 letter words
const allWords = require('./words');
// has these letters
const hasLetters = ['e', 'a', 'r','t']; 
// must not has these letters
const mustNotHaveLetters = ['p', 'i', 'c', 's', 'n', 'w', 'f', 'b', 'k', 'h'];
// must have selected letters in these positions
const mustHaveLettersInPosition = [,'a',,'e','r']
// not in these positions
const mustNotHaveLettersInPosition = ['a',,'t',,'e']

const containsLetter = (word, letter) => {                           //return word yg ada letter yg diminta
  return word.includes(letter);
}

const doesNotContainLetter = (word, letter) => {                     //return word yg takda letter yang diminta
  return !word.includes(letter);
}

const hasLetterInPosition = (word, letter, position) => {            //return word yg ada letter dalam index word
  if (letter === undefined) return true;

  return word[position] === letter;
}

const noLetterInIndex = (word, letter, position) => {                //return word yang takda letter dalam index word
  if (letter === undefined) return true;

  return word[position] != letter;
}

const filteredWords = allWords.filter(word => {
  return hasLetters.every(letter => containsLetter(word, letter)) &&
  mustNotHaveLetters.every(letter => doesNotContainLetter(word, letter)) &&
  mustHaveLettersInPosition.every((letter, index) => hasLetterInPosition(word, letter, index)) &&
  mustNotHaveLettersInPosition.every((letter, index) => noLetterInIndex(word, letter, index))

})

console.log(filteredWords);
console.log('possible words', filteredWords.length);    