const review = document.querySelectorAll(".star")
review.forEach((star, index1)=> {
    star.addEventListener("click", ()=> {
        review.forEach((star, index2) => {
            const icone = star.querySelector('i');
          if (index2 <= index1 ) {
            icone.classList.add("attiva")
          } else {
            icone.classList.remove("attiva")
          }
        })
    })
})
const form=  document.getElementsByClassName("invio")
form.addEventListener("invia",function(e){
    e.preventDefault()
    form.reset()
})