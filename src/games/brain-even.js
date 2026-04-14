import playGame from '../index.js'
import { getRandomNumber } from '../random.js'

const isEven = number => number % 2 === 0

const generateRound = () => {
  const randomNumber = getRandomNumber()
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'
  const question = randomNumber

  return [question, correctAnswer]
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

export const playEvenGame = () => playGame(generateRound, gameDescription)
