const twentyOne = document.getElementsByClassName('option-Y')[0]
const twentyTwo = document.getElementsByClassName('option-Z')[0]
const twentyThree = document.getElementsByClassName('option-AA')[0]
const twentyFour = document.getElementsByClassName('option-BB')[0]

twentyOne.addEventListener('click', ()=> {
    twentyOne.classList.add('option-Y-active')
    twentyTwo.classList.remove('option-Z-active')
    twentyThree.classList.remove('option-AA-active')
    twentyFour.classList.remove('option-BB-active')
})
twentyTwo.addEventListener('click', ()=> {
    twentyOne.classList.remove('option-Y-active')
    twentyTwo.classList.add('option-Z-active')
    twentyThree.classList.remove('option-AA-active')
    twentyFour.classList.remove('option-BB-active')
})
twentyThree.addEventListener('click', ()=> {
    twentyOne.classList.remove('option-Y-active')
    twentyTwo.classList.remove('option-Z-active')
    twentyThree.classList.add('option-AA-active')
    twentyFour.classList.remove('option-BB-active')
})
twentyFour.addEventListener('click', ()=> {
    twentyOne.classList.remove('option-Y-active')
    twentyTwo.classList.remove('option-Z-active')
    twentyThree.classList.remove('option-AA-active')
    twentyFour.classList.add('option-BB-active')
})

const twentyFive = document.getElementsByClassName('option-CC')[0]
const twentySix = document.getElementsByClassName('option-DD')[0]
const twentySeven = document.getElementsByClassName('option-EE')[0]
const twentyEight = document.getElementsByClassName('option-FF')[0]

twentyFive.addEventListener('click', ()=> {
    twentyFive.classList.add('option-CC-active')
    twentySix.classList.remove('option-DD-active')
    twentySeven.classList.remove('option-EE-active')
    twentyEight.classList.remove('option-FF-active')
})
twentySix.addEventListener('click', ()=> {
    twentyFive.classList.remove('option-CC-active')
    twentySix.classList.add('option-DD-active')
    twentySeven.classList.remove('option-EE-active')
    twentyEight.classList.remove('option-FF-active')
})
twentySeven.addEventListener('click', ()=> {
    twentyFive.classList.remove('option-CC-active')
    twentySix.classList.remove('option-DD-active')
    twentySeven.classList.add('option-EE-active')
    twentyEight.classList.remove('option-FF-active')
})
twentyEight.addEventListener('click', ()=> {
    twentyFive.classList.remove('option-CC-active')
    twentySix.classList.remove('option-DD-active')
    twentySeven.classList.remove('option-EE-active')
    twentyEight.classList.add('option-FF-active')
})