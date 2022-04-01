const five = document.getElementsByClassName('option-I')[0]
const six = document.getElementsByClassName('option-J')[0]
const seven = document.getElementsByClassName('option-K')[0]
const eight = document.getElementsByClassName('option-L')[0]

five.addEventListener('click', ()=> {
    five.classList.add('option-I-active')
    six.classList.remove('option-J-active')
    seven.classList.remove('option-K-active')
    eight.classList.remove('option-L-active')
})

six.addEventListener('click', ()=> {
    six.classList.add('option-J-active')
    five.classList.remove('option-I-active')
    seven.classList.remove('option-K-active')
    eight.classList.remove('option-L-active')
})

seven.addEventListener('click', ()=> {
    six.classList.remove('option-J-active')
    five.classList.remove('option-I-active')
    seven.classList.add('option-K-active')
    eight.classList.remove('option-L-active')
})

eight.addEventListener('click', ()=> {
    six.classList.remove('option-J-active')
    five.classList.remove('option-I-active')
    seven.classList.remove('option-K-active')
    eight.classList.add('option-L-active')
})

const nine = document.getElementsByClassName('option-M')[0]
const ten = document.getElementsByClassName('option-N')[0]
const eleven = document.getElementsByClassName('option-O')[0]
const twelve = document.getElementsByClassName('option-P')[0]

nine.addEventListener('click', ()=> {
    nine.classList.add('option-M-active')
    ten.classList.remove('option-N-active')
    eleven.classList.remove('option-O-active')
    twelve.classList.remove('option-P-active')
})

ten.addEventListener('click', ()=> {
    nine.classList.remove('option-M-active')
    ten.classList.add('option-N-active')
    eleven.classList.remove('option-O-active')
    twelve.classList.remove('option-P-active')
})

eleven.addEventListener('click', ()=> {
    nine.classList.remove('option-M-active')
    ten.classList.remove('option-N-active')
    eleven.classList.add('option-O-active')
    twelve.classList.remove('option-P-active')
})

twelve.addEventListener('click', ()=> {
    nine.classList.remove('option-M-active')
    ten.classList.remove('option-N-active')
    eleven.classList.remove('option-O-active')
    twelve.classList.add('option-P-active')
})