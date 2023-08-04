//obtendo referências
const form = document.querySelector('form')
const button = document.querySelector('button')
const scoreParagraph = document.createElement('p')

const correctAnswers = ['B', 'A', 'B', 'A', 'A']

let score = 0


//Função de animação de score
const animateFinalScore = () => {
  let counter = 0

  const timer = setInterval(() => {
    counter++

    if(counter === score){
      clearInterval(timer)
    }

    scoreParagraph.textContent = `Você acertou ${counter}%`
  }, 10);

  
  
}


const resetUserScore = () => {
  score = 0
}

form.addEventListener('submit', event => {
  event.preventDefault() 
 
  //obtém respostas do usuário
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]


  resetUserScore()
  
 //calcula as respostas do usuário
  const showScore = (answer, index) => {
    if(answer === correctAnswers[index]){
      score += 20
    }

    //insere um parágrafo após o button
    button.insertAdjacentElement('afterend', scoreParagraph)

    //dá cor aos scores
    switch(score){
      case 20:
        scoreParagraph.setAttribute('class', 'score-20')
        break
        case 40:
          scoreParagraph.setAttribute('class', 'score-40')
          break
          case 60:           
            scoreParagraph.setAttribute('class', 'score-60')
            break
            case 80:             
            scoreParagraph.setAttribute('class', 'score-80')
            break
            case 100:         
              scoreParagraph.setAttribute('class', 'score-100')

    }

  }

  userAnswers.forEach(showScore)

  scrollTo({
    top:2500, //coordenada Y
    left:2500, //coordenada X
    behavior:'smooth'
  })

  animateFinalScore()
  
 
})

