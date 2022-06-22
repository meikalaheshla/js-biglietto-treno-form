

const fullName = document.getElementById('fullname')
const travelLenght = parseInt(document.getElementById('kmtodo').value)
const travelerAge = document.getElementById('age-groups')
let TicketPrice = travelLenght * 0.21
const btnGenerate = document.getElementById('genera')
const btnCancel = document.getElementById('annulla')
const ticket = document.getElementById('biglietto')
const nameDisplayer = document.getElementById('name-tab')
const priceDisplayer = document.getElementById('price-tab')
const offeringDsiplayer = document.getElementById('offerta')
console.log(fullName, travelLenght, travelerAge, TicketPrice)
console.log(typeof TicketPrice)



console.log(TicketPrice)

btnGenerate.addEventListener('click', function () {
    if (travelerAge.value === 'minorenne') {
        const youngDiscount = TicketPrice * 0.20
        TicketPrice = TicketPrice - youngDiscount
        offeringDsiplayer.innerText = `offerta giovani`

        console.log(youngDiscount)
        console.log(typeof TicketPrice)

    } else if (travelerAge.value === 'oversixtyfive') {
        const oldDiscount = TicketPrice * 0.40
        TicketPrice = TicketPrice - oldDiscount
        offeringDsiplayer.innerText = `offerta over 65`

        console.log(oldDiscount)
        console.log(typeof TicketPrice)


        // } else {
        //     offeringDsiplayer.innerText = `biglietto intero`
    }
    nameDisplayer.innerText = fullName.value
    priceDisplayer.innerText = `€ ${TicketPrice}`
    console.log(typeof TicketPrice)



})



