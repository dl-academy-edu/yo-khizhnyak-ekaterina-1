const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn__js');
const closePopup = document.querySelector('.close');
const input = document.querySelector('.contact__input-name');
const overlay = document.querySelector('.overlay');
console.log(closePopup)


btn.addEventListener('click', function() {
    popup.classList.add('open');
    input.focus();
})

closePopup.addEventListener('click', function () {
    popup.classList.remove('open');
})

overlay.addEventListener('click', function() {
    popup.classList.remove('open');
})