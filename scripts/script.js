const page = document.querySelector('.page')
const popupOpenButton = page.querySelector('.profile__open-popup')
const name = page.querySelector('.profile__name')
const about = page.querySelector('.profile__about')
const popup = document.querySelector('.popup')
const popupCloseButton = popup.querySelector('.popup__close')
const inputName = popup.querySelector('.popup__input_name')
const inputAbout = popup.querySelector('.popup__input_about')
const submit = popup.querySelector('.popup__save')

const popupToggle = function (event) {
    event.preventDefault();
    popup.classList.toggle('popup__opened');
    inputName.value = name.textContent;
    inputAbout.value = about.textContent;
}

const popupClose = function (event) {
    if (event.target !== event.currentTarget) return
    popupToggle(event);
}

const formSubmitHandler = function (event) {
    event.preventDefault();
    name.textContent = inputName.value;
    about.textContent = inputAbout.value;
    popupToggle(event);
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', popupClose);
submit.addEventListener('click', formSubmitHandler);



