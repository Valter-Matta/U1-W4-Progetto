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
console.log(countAnswers())

const completeRate = (succes, fail) => {
  let result = ''
  if (countAnswers() < 6) {
    result = fail
  } else if (countAnswers() >= 6) {
    result = succes
  }
  return result
}

esito.innerText = completeRate('Congratulations', 'Failed')

passed.innerText = completeRate(
  'You Passed the exam',
  'Sorry, you did not pass the exam.'
)

certified.innerText = completeRate(
  `We'll send you the certificate in few minutes.
    Check your email (including premotions / spam folder)`,
  'Check the sections of the quiz where you had the most difficulty and go over the study material again.'
)

const sx = document.getElementById('right')
const dx = document.getElementById('wrong')
sx.innerText = `${countAnswers()} / ${totalQuestions.length} Questions `
dx.innerText = `${totalQuestions.length - countAnswers()}/10 Questions`

const percRightAnswers = document.getElementById('win') //%
const percWrongAnswers = document.getElementById('lose') //%

percRightAnswers.innerText = `${
  (countAnswers() / totalQuestions.length) * 100
}%`
percWrongAnswers.innerText = `${100 - countAnswers() * 10}%`

const wrongPercent = `${100 - countAnswers() * 10}%`
const rightPercent = `${(countAnswers() / totalQuestions.length) * 100}%`
console.log(wrongPercent)
console.log(rightPercent)

// div cerchio percentuale
const divCircle = document.getElementById('graphic') //cerchio
// divCircle.style.background = `conic-gradient(#C2128D 0% ${wrongPercent}, #00FFFF ${rightPercent} 100%)`
divCircle.style.background = `conic-gradient(#C2128D 0% ${wrongPercent}, #00FFFF ${wrongPercent} 100%)`

const button = document.getElementById('rate-us')
button.addEventListener('click', () => {
  window.location.href = './feedback_page.html'
})
