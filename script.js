const button = document.querySelector('.search-button')
const input = document.querySelector('input')

button.addEventListener('click', ()=>{
    button.parentNode.classList.toggle('active')
    input.focus()
})