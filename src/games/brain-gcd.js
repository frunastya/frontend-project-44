import playGame from '../index.js'

const getRandomNumber = () => Math.floor(Math.random() * 101)

const generateRound = () => {
  let a = getRandomNumber()
  let b = getRandomNumber()
  const question = `${a} ${b}`
  let correctAnswer

  if (b === 0) {
    correctAnswer = String(a)
  }
  else {
    let result
    while (b !== 0) {
      result = a % b
      a = b
      b = result
    }
    correctAnswer = String(a)
  }

  return [question, correctAnswer]
}

const gameDescription = 'Find the greatest common divisor of given numbers.'

export const playGcdGame = () => playGame(generateRound, gameDescription)
