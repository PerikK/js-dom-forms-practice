const form = document.querySelector('#form')
const userName = document.querySelector('#name')
const email = document.querySelector('#email')
const list = document.querySelector('#list')


const checkName = () => {
    
}


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nameLi = document.createElement('li')
    nameLi.innerText  = userName.value
    const emailLi = document.createElement('li')
    emailLi.innerText = email.value

    list.append(nameLi)
    list.append(emailLi)

    userName.value = ''
    email.value = ''
})

