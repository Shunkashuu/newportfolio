//modal trigger
var trigger = document.querySelector(".trigger");
var trigger2 = document.querySelector(".trigger2");
var trigger3 = document.querySelector(".trigger3");
var trigger4 = document.querySelector(".trigger4");
var trigger5 = document.querySelector(".trigger5");
var trigger6 = document.querySelector(".trigger6");
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
trigger2.addEventListener("click", toggleModal);
trigger3.addEventListener("click", toggleModal);
trigger4.addEventListener("click", toggleModal);
trigger5.addEventListener("click", toggleModal);
trigger6.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
