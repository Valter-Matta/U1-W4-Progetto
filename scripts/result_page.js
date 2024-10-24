const esito = document.getElementById('result') // congrats
const passed = document.getElementById('passed') // you passed exam
const certified = document.getElementById('certified') //paragr. certified

//recupero le risposte esatte e quelle dell'utente
const correctAnswers = JSON.parse(localStorage.getItem('all_correct_answer'))
const totalQuestions = JSON.parse(localStorage.getItem('user_answer'))
console.log(correctAnswers)
console.log(totalQuestions)

const countAnswers = function () {
  let totalUserCorrectAnswers = 0
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === totalQuestions[i]) {
      totalUserCorrectAnswers += 1
    }
  }
  return totalUserCorrectAnswers
}

const completeRate = (succes, fail) => {
  let result = ''
  if (countAnswers() < Math.floor(totalQuestions.length / 2 + 1)) {
    result = fail
    console.log(totalQuestions.length / 2 + 1)
  } else if (countAnswers() >= Math.floor(totalQuestions.length / 2 + 1)) {
    result = succes
  }
  return result
}
esito.innerText = completeRate('Congratulations', 'Failed')

passed.innerHTML = completeRate(
  'You Passed the exam',
  '<span>Sorry, you did not pass the exam.</span>'
)

certified.innerText = completeRate(
  `We'll send you the certificate in few minutes.
    Check your email (including premotions / spam folder)`,
  'Check the sections of the quiz where you had the most difficulty and go over the study material again.'
)

const sx = document.getElementById('right')
const dx = document.getElementById('wrong')
sx.innerText = `${countAnswers()} / ${totalQuestions.length} Questions `
dx.innerText = `${totalQuestions.length - countAnswers()}/${
  totalQuestions.length
} Questions`

const percRightAnswers = document.getElementById('win') //%
const percWrongAnswers = document.getElementById('lose') //%

percRightAnswers.innerText = `${Math.ceil(
  (countAnswers() / totalQuestions.length) * 100
)}%`
percWrongAnswers.innerText = `${Math.floor(
  ((totalQuestions.length - countAnswers()) * 100) / totalQuestions.length
)}%`

const rightPercent = `${(countAnswers() / totalQuestions.length) * 100}`
const wrongPercent = 100 - countAnswers() * 10
console.log(wrongPercent)
console.log(rightPercent)

// div cerchio percentuale
const animateCircle = (duration) => {
  const divCircle = document.getElementById('graphic')
  let progress = 0
  const step = 1 // Incremento del progresso
  const intervalDuration = duration / 100 // Intervallo per aggiornamento

  const interval = setInterval(() => {
    progress += step
    const currentRightPercent = (rightPercent * progress) / 100
    const currentWrongPercent = 100 - currentRightPercent

    divCircle.style.background = `conic-gradient(#C2128D 0% ${currentWrongPercent}%,#00FFFF ${currentWrongPercent}% 100%)`

    if (progress >= 100) {
      clearInterval(interval) // Ferma l'animazione quando arriva al 100%
    }
  }, intervalDuration)
}
animateCircle(3000)

const button = document.getElementById('rate-us')
button.addEventListener('click', () => {
  setTimeout(function () {
    window.location.href = './feedback_page.html'
  }, 500)
})
// `conic-gradient(from 0deg, #C2128D 0% ${progress * 0.5}, #00FFFF ${progress * 0.5} 100%)`
