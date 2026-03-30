import playGame from '../index.js'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }
  if (number === 2) {
    return true
  }
  if (number % 2 === 0) {
    return false 
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
        return false
    }
  }

  return true
}


const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const generateRound = () => {
  const num = getRandomNumber()
  const question = `${num}`
  const correctAnswer = isPrime(num) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const playPrimeGame = () => playGame(generateRound, gameDescription)
