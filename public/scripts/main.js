import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')

// Quando o botão 'marcar como lida' for clicado ele abri a modal
checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

// Quando o botão 'excluir' for clicado ele abri a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? 'Marcar como lida' : 'Excluir'

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    //Abrir modal
    modal.open()
}