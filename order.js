let cart = JSON.parse(localStorage.getItem("cart")) || [];

let OUTPUT = document.getElementById("JavaScriptOutput");

const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");

let total = 0;
let itemReceipt = ['Cake', 'Crepes', 'Milkshake', 'SweetIcedTea', 'Feastables'];




if (cart.length === 0) {
    OUTPUT.innerHTML = "<h2>Your Cart is Empty</h2>";
} else {
    OUTPUT.innerHTML = "<h2>Your Cart</h2>";

    for (let item of cart) {
        OUTPUT.innerHTML += item.name + " - $" + item.price.toFixed(2) + "<br>";
        total += item.price;
    }

    OUTPUT.innerHTML += "<br><strong>Total: $" + total.toFixed(2) + "</strong>";
}


function getNameInput() {
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<br>Your name is "+ userName+""
}


function getMoneyInput() {
    let userMoney = Number(MONEY_FIELD.value);

    if (userMoney < total) {
        OUTPUT.innerHTML += "<p>Sorry, you don't have enough money.</p>";
    } else {
        let change = userMoney - total;

        OUTPUT.innerHTML += "<p>You paid $" + userMoney.toFixed(2) + "</p>";
        OUTPUT.innerHTML += "<p>Your change is $" + change.toFixed(2) + "</p>";
    }
}
function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}