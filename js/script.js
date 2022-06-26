// FORM BOXES
const travelerNameBox = document.getElementById('name');
const travelKmBox = document.getElementById('travelkm');
const ageRangeBox = document.getElementById('age-range');
const generateButton = document.getElementById('generate-btn');
const cancelButton = document.getElementById('cancel-btn');

// TICKET BOXES
const ticket = document.getElementById('ticket-box');
const ticketNameBox = document.getElementById('ticket-name');
const offerBox = document.getElementById('offer');
const vagonBox = document.getElementById('vagon');
const pnrBox = document.getElementById('pnr');
const priceBox = document.getElementById('price');
const buyButton = document.getElementById('buy-button');

// DISCOUNTS & price for km 
const overDiscount = 0.40;
const youngDiscount = 0.20;
const priceforkm = 0.21;

// VAGON AND PNR GENERATOR
const vagon = Math.floor(Math.random() * 10) + 1;
const pnrValue = Math.floor(Math.random() * 9999) + 1;

generateButton.addEventListener('click', function () {
    const travelerNameValue = travelerNameBox.value;
    const travelKmValue = parseInt(travelKmBox.value);
    const ageRangeValue = ageRangeBox.value;
    const fullTicketPrice = travelKmValue * 0.21;

    // TICKET PRICING & DISCOUNTS
    let discount;

    if (ageRangeValue === 'min') {
        discount = fullTicketPrice * youngDiscount
        offerBox.innerText = "Offerta giovani"



    } else if (ageRangeValue === 'over') {
        discount = fullTicketPrice * overDiscount
        offerBox.innerText = "Offerta over 65"


    } else {
        discount = 0
        offerBox.innerText = "Biglietto intero"


    }
    ticket.className = 'd-block'
    const ticketPrice = fullTicketPrice - discount;
    ticketNameBox.innerText = travelerNameValue;
    vagonBox.innerText = vagon;
    pnrBox.innerText = pnrValue;
    priceBox.innerText = `€${ticketPrice.toFixed(2)}`;


})
buyButton.addEventListener('click', function () {
    alert(`Grazie per aver scelto TRENINO THOMAS per il tuo viaggio`);
    ticket.className = 'd-none'


    travelerNameBox.value = travelKmBox.value = ageRangeBox.value = ''


})






