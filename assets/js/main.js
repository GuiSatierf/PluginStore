//Modal One//
const modalOne = document.querySelector(".modalOne");
const triggerOne = document.querySelector(".triggerOne");
const closeButtonOne = document.querySelector(".close-modalOne");


function toggleModal() {
    modalOne.classList.toggle("show-modalOne");
}

function windowOnClick(event) {
    if (event.target === modalOne) {
        toggleModal();
    }
}


triggerOne.addEventListener("click", toggleModal);
closeButtonOne.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//Modal two//
const modalTwo = document.querySelector(".modalTwo");
const triggerTwo = document.querySelector(".triggerTwo");
const closeButtonTwo = document.querySelector(".close-modalTwo");

function toggleModalTwo() {
    modalTwo.classList.toggle("show-modalTwo");
}

function windowOnClickTwo(event) {
    if (event.target === modalTwo) {
       toggleModalTwo();
    }
}

triggerTwo.addEventListener("click", toggleModalTwo);
closeButtonTwo.addEventListener("click", toggleModalTwo);
window.addEventListener("click", windowOnClickTwo);
