import readlineSync from 'readline-sync'

export const isEven = number => number % 2 === 0

export const playEvenGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let countCorrectAnswer = 0
  const roundsToWin = 3

  while (countCorrectAnswer < roundsToWin) {
    const randomNumber = Math.floor(Math.random() * 100) + 1

    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ')

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

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
