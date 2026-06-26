console.log("Hello world!")



const OUTPUT = document.getElementById("JavaScriptOutput")
const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");


let cart = [];

let prices = {
    Cake: 7.50,
    Crepes: 12.50,
    Feastables: 10,
    SweetIcedTea: 7.50,
    Milkshake: 8.50
};


function getNameInput() {
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<br>Your name is "+ userName+""
}

function calculateChange(_money, _price) {
    let change = _money - _price;
    return change;
}

function addToCart(item) {
    cart.push(item);
    OUTPUT.innerHTML += "<br>Added: " + item;
}

function getMoneyInput() {
    let userMoney = Number(MONEY_FIELD.value);

    OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars";

    if (userMoney >= 4) {
        OUTPUT.innerHTML += "<br>You have enough money<br>";

        let change = calculateChange(userMoney, 4);

        OUTPUT.innerHTML += "<br>You will get $" + change + " of change";
    } else {
        OUTPUT.innerHTML += "<p>You litreally can't even afford a chocolate bar</p>";
    }

    if (MONEY_FIELD.value <= 0) {
        OUTPUT.innerHTML = "<br>You can't really have 0$ right??? Lock in and make some money";
    } else if (MONEY_FIELD.value > 9999999999999) {
        OUTPUT.innerHTML = "<br> You have more money that trees in the world. This is cap"
    } else if (MONEY_FIELD.checkValidity() === false){
        OUTPUT.innerHTML = "<br>Please fill in the form correctly."
    } else    {
        // Process the form normally
    }
   
}
let foodArray = ["Cake", "Crepes", "Feastables", "SweetIcedTea", "Milkshake"]





