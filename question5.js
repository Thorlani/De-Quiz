const twentyNine = document.getElementsByClassName('option-GG')[0]
const thirty = document.getElementsByClassName('option-HH')[0]
const thirtyOne = document.getElementsByClassName('option-II')[0]
const thirtyTwo = document.getElementsByClassName('option-JJ')[0]


twentyNine.addEventListener('click', ()=> {
    twentyNine.classList.add('option-GG-active')
    thirty.classList.remove('option-HH-active')
    thirtyOne.classList.remove('option-II-active')
    thirtyTwo.classList.remove('option-JJ-active')
})
thirty.addEventListener('click', ()=> {
    twentyNine.classList.remove('option-GG-active')
    thirty.classList.add('option-HH-active')
    thirtyOne.classList.remove('option-II-active')
    thirtyTwo.classList.remove('option-JJ-active')
})
thirtyOne.addEventListener('click', ()=> {
    twentyNine.classList.remove('option-GG-active')
    thirty.classList.remove('option-HH-active')
    thirtyOne.classList.add('option-II-active')
    thirtyTwo.classList.remove('option-JJ-active')
})
thirtyTwo.addEventListener('click', ()=> {
    twentyNine.classList.remove('option-GG-active')
    thirty.classList.remove('option-HH-active')
    thirtyOne.classList.remove('option-II-active')
    thirtyTwo.classList.add('option-JJ-active')
})

const thirtyThree = document.getElementsByClassName('option-KK')[0]
const thirtyFour = document.getElementsByClassName('option-LL')[0]
const thirtyFive = document.getElementsByClassName('option-MM')[0]
const thirtySix = document.getElementsByClassName('option-NN')[0]

thirtyThree.addEventListener('click', ()=> {
    thirtyThree.classList.add('option-KK-active')
    thirtyFour.classList.remove('option-LL-active')
    thirtyFive.classList.remove('option-LL-active')
    thirtySix.classList.remove('option-LL-active')
})
thirtyFour.addEventListener('click', ()=> {
    thirtyThree.classList.remove('option-KK-active')
    thirtyFour.classList.add('option-LL-active')
    thirtyFive.classList.remove('option-LL-active')
    thirtySix.classList.remove('option-LL-active')
})
thirtyFive.addEventListener('click', ()=> {
    thirtyThree.classList.remove('option-KK-active')
    thirtyFour.classList.remove('option-LL-active')
    thirtyFive.classList.add('option-LL-active')
    thirtySix.classList.remove('option-LL-active')
})
thirtySix.addEventListener('click', ()=> {
    thirtyThree.classList.remove('option-KK-active')
    thirtyFour.classList.remove('option-LL-active')
    thirtyFive.classList.remove('option-LL-active')
    thirtySix.classList.add('option-LL-active')
})

