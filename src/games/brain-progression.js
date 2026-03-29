import playGame from '../index.js'


const getProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5
  const start = Math.floor(Math.random() * 100)
  const step = Math.floor(Math.random() * 10) + 1
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
