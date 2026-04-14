import playGame from '../index.js'
import { getRandomNumber } from '../random.js'

const getProgression = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 10)
  let array = []
  for (let index = 0; index < length; index++) {
    const currentElement = start + index * step
    array.push(currentElement)
  }

  return array
}

const generateRound = () => {
  const progression = getProgression()
  const i = Math.floor(Math.random() * progression.length)
  const correctAnswer = String(progression[i])
  progression[i] = '..'

  const question = progression.join(' ')

  return [question, correctAnswer]
}

const gameDescription = 'What number is missing in the progression?'

export const playProgressionGame = () => playGame(generateRound, gameDescription)
