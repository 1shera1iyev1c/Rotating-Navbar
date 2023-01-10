let elBtnOpen = document.querySelector('.main__btn')
let elBtnClose = document.querySelector('.main__btn__box')
let elContainer = document.querySelector('.main__container')

elBtnOpen.addEventListener('click', function(evt){
    elContainer.classList.add('open__nav')
    // elContainer.classList.remove('main__container')
})
elBtnClose.addEventListener('click', function(evt){
    elContainer.classList.remove('open__nav')
})