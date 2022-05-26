const indbutton = document.querySelector('#indbutton');
const couplebutton = document.querySelector('#couplebutton');
const familybutton = document.querySelector('#familybutton');
const superbutton = document.querySelector('#superbutton');
const tspCard = document.querySelector('#tsp_card');


function dropdown(){
    const modal = document.querySelector('#modal');
    modal.classList.toggle('hide-dropdown');
}

function closeCardModal() {
    const servicemodal = document.querySelector('#serviceModal');
    servicemodal.classList.add('hide-servicedropdown');
    const backdrop = document.querySelector('#backdropservice');
    backdrop.classList.remove("backdrop")
};

function addBackdrop() {
    const backdrop = document.querySelector('#backdropservice');
    backdrop.classList.add("backdrop")
}

function closeSessionCardModal(){
    const sessionModal = document.querySelector('#modalSession');
    sessionModal.classList.add('hide-dropdownSession');
    const backdrop = document.querySelector('#backdropsession');
    backdrop.classList.remove("backdropSession")
}

function buyPackageModal(){
    const backdrop = document.querySelector('#backdropsession');
    backdrop.classList.add("backdropSession");
    const sessionmodal = document.querySelector('#modalSession');
    sessionmodal.classList.remove('hide-dropdownSession');

}



indbutton.addEventListener('click', () => {
    const hide = document.querySelector('#card_modal_header');
    hide.innerText = "Individual Therapy"
    addBackdrop();
    const servicemodal = document.querySelector('#serviceModal');
    servicemodal.classList.remove('hide-servicedropdown');
})

couplebutton.addEventListener('click', () => {
    const hide = document.querySelector('#card_modal_header');
    hide.innerText = "Couple Therapy"
    addBackdrop();
    const servicemodal = document.querySelector('#serviceModal');
    servicemodal.classList.remove('hide-servicedropdown');
})

familybutton.addEventListener('click', () => {
    const hide = document.querySelector('#card_modal_header');
    hide.innerText = "Family Therapy";
    addBackdrop();
    const servicemodal = document.querySelector('#serviceModal');
    servicemodal.classList.remove('hide-servicedropdown');
})

superbutton.addEventListener('click', () => {
    const hide = document.querySelector('#card_modal_header');
    hide.innerText = "Supervision Therapy"
    addBackdrop();
    const servicemodal = document.querySelector('#serviceModal');
    servicemodal.classList.remove('hide-servicedropdown');
})

tspCard.addEventListener('click', () => {
    const tspCardPrice = document.querySelector('#tsp_card_price');
    tspCardPrice.classList.toggle('hide');
})