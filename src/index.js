import readlineSync from 'readline-sync'
import { helloFunction } from './cli.js'

const playGame = (generateRound, gameDescription) => {
  const name = helloFunction()

  console.log(gameDescription)

  let countCorrectAnswer = 0
  const roundsToWin = 3

  while (countCorrectAnswer < roundsToWin) {
    const [question, correctAnswer] = generateRound()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer === correctAnswer) {
      console.log('Correct!')
      countCorrectAnswer += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default playGame
