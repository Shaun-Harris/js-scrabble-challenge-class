class Scrabble {
  constructor(word) {
    // Convert the word to uppercase to make scoring case-insensitive
    this.word = word ? word.toUpperCase() : ''
  }

  score() {
    // Define letter values according to the given table
    const letterValues = {
      // 1 point
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      // 2 points
      D: 2,
      G: 2,
      // 3 points
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      // 4 points
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      // 5 points
      K: 5,
      // 8 points
      J: 8,
      X: 8,
      // 10 points
      Q: 10,
      Z: 10
    }

    let totalScore = 0

    // Iterate over each letter in the word
    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i]
      // Check if the letter exists in the letterValues object
      if (Object.prototype.hasOwnProperty.call(letterValues, letter)) {
        // Add the value of the letter to the total score
        totalScore += letterValues[letter]
      }
    }

    return totalScore
  }
}

// Testing
let scrabble = new Scrabble('')
console.log(scrabble.score()) // => 0

scrabble = new Scrabble(' \t\n')
console.log(scrabble.score()) // => 0

scrabble = new Scrabble(null)
console.log(scrabble.score()) // => 0

scrabble = new Scrabble('a')
console.log(scrabble.score()) // => 1

scrabble = new Scrabble('f')
console.log(scrabble.score()) // => 4

scrabble = new Scrabble('street')
console.log(scrabble.score()) // => 6

scrabble = new Scrabble('quirky')
console.log(scrabble.score()) // => 22

scrabble = new Scrabble('OXYPHENBUTAZONE')
console.log(scrabble.score()) // => 41

module.exports = Scrabble
