

const fullName = document.getElementById('fullname').value
const travelLenght = parseInt(document.getElementById('kmtodo').value)
const travelerAge = document.getElementById('age-groups').value
let TicketPrice = travelLenght * 0.21
const btnGenerate = document.getElementById('genera')
const btnCancel = document.getElementById('annulla')
const ticket = document.getElementById('biglietto')
const nameDisplayer = document.getElementById('name-tab')
const priceDisplayer = document.getElementById('price-tab')
const offeringDsiplayer = document.getElementById('offerta')
console.log(fullName, travelLenght, travelerAge, TicketPrice)



console.log(TicketPrice)

btnGenerate.addEventListener('click', function () {
    if (travelerAge === 'minorenne') {
        const youngDiscount = TicketPrice * 0.20
        TicketPrice = TicketPrice - youngDiscount
        offeringDsiplayer.innerText = `offerta giovani`

        console.log(youngDiscount)

    } else if (travelerAge === 'oversixtyfive') {
        const oldDiscount = TicketPrice * 0.40
        TicketPrice = TicketPrice - oldDiscount
        offeringDsiplayer.innerText = `offerta over 65`

        console.log(oldDiscount)


    } else {
        offeringDsiplayer.innerText = `biglietto intero`
    }
    nameDisplayer.innerText = fullName
    priceDisplayer.innerText = `€ ${TicketPrice}`



})



