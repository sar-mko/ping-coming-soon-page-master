const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const input = document.querySelector('input')
const button = document.querySelector('button')
const inputContainer = document.querySelector('.input-cont')
const spanAlert = document.querySelector('.alert-msg')

button.addEventListener('click', submitEmail)

function submitEmail() {
    if(emailRegex.test(input.value)){
        alert('Submitted!')
        spanAlert.style.display = 'none'
        input.style.border = "1px solid hsl(0, 0%, 92%)"
        input.value = ''
    }else if(input.value === ''){
        spanAlert.style.display = 'block'
        spanAlert.innerText = "Whoops! It looks like you forgot to add your email"
        input.style.border = "1px solid red"
    }else{
        spanAlert.style.display = 'block'
        spanAlert.innerText = "Please provide a valid email address"
        input.style.border = "1px solid red"
    }
    
}
