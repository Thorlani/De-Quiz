const tolu = document.getElementsByClassName('option-A')[0]
const temi = document.getElementsByClassName('option-B')[0]
const tolani = document.getElementsByClassName('option-C')[0]
const toki = document.getElementsByClassName('option-D')[0]

tolu.addEventListener('click', ()=> {
    tolu.classList.add('option-A-active')
    temi.classList.remove('option-B-active')
    tolani.classList.remove('option-C-active')
    toki.classList.remove('option-D-active')
})

temi.addEventListener('click', ()=> {
    tolu.classList.remove('option-A-active')
    temi.classList.add('option-B-active')
    tolani.classList.remove('option-C-active')
    toki.classList.remove('option-D-active')
})

tolani.addEventListener('click', ()=> {
    tolani.classList.add('option-C-active')
    tolu.classList.remove('option-A-active')
    temi.classList.remove('option-B-active')
    toki.classList.remove('option-D-active')
})

toki.addEventListener('click', ()=> {
    tolani.classList.remove('option-C-active')
    tolu.classList.remove('option-A-active')
    temi.classList.remove('option-B-active')
    toki.classList.add('option-D-active')
})

const one = document.getElementsByClassName('option-E')[0]
const two = document.getElementsByClassName('option-F')[0]
const three = document.getElementsByClassName('option-G')[0]
const four = document.getElementsByClassName('option-H')[0]

one.addEventListener('click', ()=> {
    one.classList.add('option-E-active')
    two.classList.remove('option-F-active')
    three.classList.remove('option-G-active')
    four.classList.remove('option-H-active')
})

two.addEventListener('click', ()=> {
    one.classList.remove('option-E-active')
    two.classList.add('option-F-active')
    three.classList.remove('option-G-active')
    four.classList.remove('option-H-active')
})

three.addEventListener('click', ()=> {
    one.classList.remove('option-E-active')
    two.classList.remove('option-F-active')
    three.classList.add('option-G-active')
    four.classList.remove('option-H-active')
})

four.addEventListener('click', ()=> {
    one.classList.remove('option-E-active')
    two.classList.remove('option-F-active')
    three.classList.remove('option-G-active')
    four.classList.add('option-H-active')
})
