//obtendo referências
const form = document.querySelector('form')
const button = document.querySelector('button')
const scoreParagraph = document.createElement('p')

const correctAnswers = ['B', 'A', 'B', 'A', 'A']

form.addEventListener('submit', event => {
  event.preventDefault()
 
  let score = 0
 
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]


  const showScore = (answer, index) => {
    if(answer === correctAnswers[index]){
      score += 20
    }

    
    button.insertAdjacentElement('afterend', scoreParagraph)

    switch(score){
      case 20:
        scoreParagraph.textContent = 'Você acertou 20%'
        scoreParagraph.setAttribute('class', 'score-20')
        break
        case 40:
          scoreParagraph.textContent = 'Você acertou 40%'
          scoreParagraph.setAttribute('class', 'score-40')
          break
          case 60:
            scoreParagraph.textContent = 'Você acertou 60%'
            scoreParagraph.setAttribute('class', 'score-60')
            break
            case 80:
              scoreParagraph.textContent = 'Você acertou 80%'
            scoreParagraph.setAttribute('class', 'score-80')
            break
            case 100:
              scoreParagraph.textContent = 'Parabéns ! Você acertou 100%'
              scoreParagraph.setAttribute('class', 'score-100')

    }

  }

  userAnswers.forEach(showScore)

  

})