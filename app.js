//  We first grab the user input
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const customTip = document.getElementById('custom');
const reset = document.getElementById('reset');
const tipAmount = document.getElementById('output1');
const total = document.getElementById('output2');
const form = document.getElementById('inputForm');


//  Setting up the bill input
bill.addEventListener('input',setBill)

let billvalue = 0.0; //Default

function setBill()
{
    billvalue = parseFloat(bill.value);
    console.log(billvalue);
}

//  Setting up the Number of People Input
people.addEventListener('input',setPeople);


let numPeople = 0.0;

function setPeople()
{
    numPeople = parseInt(people.value);
    console.log(numPeople);
}

// Setting up custom input
customTip.addEventListener('input',getCustom)

let custom = 0

function getCustom()
{
    custom = parseFloat(customTip.value);
    console.log(custom)
}


