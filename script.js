const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input=document.querySelector('input')
const form=document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
setTimeout(()=>{
    input.focus()
    console.log("input focused")
},1000)
setTimeout(()=>{
    input.blur()
    console.log("blur focused")
},5000)
