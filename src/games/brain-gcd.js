import playGame from '../index.js'
import { getRandomNumber } from '../random.js'

const generateRound = () => {
  let a = getRandomNumber(1, 50)
  let b = getRandomNumber(1, 50)
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
