let cart = JSON.parse(localStorage.getItem("cart")) || [];

let OUTPUT = document.getElementById("JavaScriptOutput");

const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");

let total = 0;
let menuItems = ['Cake - $7.50', 'Crepes - $12.50', 'Milkshake - $8.50', 'SweetIcedTea - $7.50', 'Feastables - $6.50'];

for (let item of menuItems) {
    OUTPUT.innerHTML += item + "<br>";
}




if (cart.length === 0) { 
    OUTPUT.innerHTML += "<h2>Your Cart is Empty</h2>";
} else {
    OUTPUT.innerHTML += "<h2>Your Cart</h2>";

    for (let item of cart) {
        OUTPUT.innerHTML += item.name + " - $" + item.price.toFixed(2) + "<br>";
        total += item.price;
    }

    OUTPUT.innerHTML += "<br><p>Total: $" + total.toFixed(2) + "</p>";

    //* Show the form normally*//
}


//* Functions */

function getNameInput() {
    let userName = NAME_FIELD.value;
    if (userName === "") {
     OUTPUT.innerHTML += "<p>Please enter your name</p>";
    }
    OUTPUT.innerHTML += "<br>Your name is "+ userName+""
}


function getMoneyInput() {

   if (cart.length === 0) {
    OUTPUT.innerHTML += "<p>Your Cart is Empty</p>";
    return;
   }

    let userMoney = Number(MONEY_FIELD.value);

    if (userMoney < total) {
        let amountNeeded = total - userMoney;
        OUTPUT.innerHTML += "<p>Sorry, you don't have enough money.</p>";
        OUTPUT.innerHTML += "<p>You need $" + (amountNeeded.toFixed(2)) + " to pay for your order</p>";
        return;
    } else {
        let change = userMoney - total;

        OUTPUT.innerHTML += "<p>You paid $" + userMoney.toFixed(2) + "</p>";
        OUTPUT.innerHTML += "<p>Your change is $" + change.toFixed(2) + "</p>";
        OUTPUT.innerHTML += "<p>Press Clear Order To Restart</p>"
    }
}
function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}


//**End of Functions */