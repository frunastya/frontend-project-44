import playGame from '../index.js'

const getRandomNumber = () => Math.floor(Math.random() * 101)
const operators = ['+', '-', '*']
const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)]

const generateRound = () => {
  const a = getRandomNumber()
  const b = getRandomNumber()
  const operator = getRandomOperator()
  const question = `${a} ${operator} ${b}`

  let correctAnswer
  switch (operator) {
    case '+': correctAnswer = a + b; break
    case '-': correctAnswer = a - b; break
    case '*': correctAnswer = a * b; break
  }

  return [question, String(correctAnswer)]
}

const gameDescription = 'What is the result of the expression?'

export const playCalcGame = () => playGame(generateRound, gameDescription)
