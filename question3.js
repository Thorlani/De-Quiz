const thirteen = document.getElementsByClassName('option-Q')[0]
const fourteen = document.getElementsByClassName('option-R')[0]
const fifteen = document.getElementsByClassName('option-S')[0]
const sixteen = document.getElementsByClassName('option-T')[0]

thirteen.addEventListener('click', ()=> {
    thirteen.classList.add('option-Q-active')
    fourteen.classList.remove('option-R-active')
    fifteen.classList.remove('option-S-active')
    sixteen.classList.remove('option-T-active')
})
fourteen.addEventListener('click', ()=> {
    thirteen.classList.remove('option-Q-active')
    fourteen.classList.add('option-R-active')
    fifteen.classList.remove('option-S-active')
    sixteen.classList.remove('option-T-active')
})
fifteen.addEventListener('click', ()=> {
    thirteen.classList.remove('option-Q-active')
    fourteen.classList.remove('option-R-active')
    fifteen.classList.add('option-S-active')
    sixteen.classList.remove('option-T-active')
})
sixteen.addEventListener('click', ()=> {
    thirteen.classList.remove('option-Q-active')
    fourteen.classList.remove('option-R-active')
    fifteen.classList.remove('option-S-active')
    sixteen.classList.add('option-T-active')
})

const seventeen = document.getElementsByClassName('option-U')[0]
const eighteen = document.getElementsByClassName('option-V')[0]
const nineteen = document.getElementsByClassName('option-W')[0]
const twenty = document.getElementsByClassName('option-X')[0]

seventeen.addEventListener('click', ()=> {
    seventeen.classList.add('option-U-active')
    eighteen.classList.remove('option-V-active')
    nineteen.classList.remove('option-W-active')
    twenty.classList.remove('option-X-active')
})
eighteen.addEventListener('click', ()=> {
    seventeen.classList.remove('option-U-active')
    eighteen.classList.add('option-V-active')
    nineteen.classList.remove('option-W-active')
    twenty.classList.remove('option-X-active')
})
nineteen.addEventListener('click', ()=> {
    seventeen.classList.remove('option-U-active')
    eighteen.classList.remove('option-V-active')
    nineteen.classList.add('option-W-active')
    twenty.classList.remove('option-X-active')
})
twenty.addEventListener('click', ()=> {
    seventeen.classList.remove('option-U-active')
    eighteen.classList.remove('option-V-active')
    nineteen.classList.remove('option-W-active')
    twenty.classList.add('option-X-active')
})