let cart = JSON.parse(localStorage.getItem("cart")) || [];
//* Get saved cart data or starts with an empty array / list *//



//* lets and consts *//
let OUTPUT = document.getElementById("JavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");

let total = 0;
//* Array of menu items on the order page *//
let menuItems = ['Cake - $7.50', 'Crepes - $12.50', 'Milkshake - $8.50', 'SweetIcedTea - $7.50', 'Feastables - $6.50'];


//* Displays the array *//
for (let item of menuItems) {
    OUTPUT.innerHTML += item + "<br>";
}




if (cart.length === 0) { 
    OUTPUT.innerHTML += "<h2>Your Cart is Empty</h2>";
    //* (Shows a message that if the user has an empty cart that its empty) *//
} else {
    OUTPUT.innerHTML += "<h2>Your Cart</h2>";
    //* Shows carts items and calculate a total *//
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
     alert("Please enter your name.");
    }
    OUTPUT.innerHTML += "<br>Your name is "+ userName+""
}


function getMoneyInput() {
    //* Stops the action if there is no items in the cart *//
   if (cart.length === 0) {
    alert("Please enter items into the cart before you pay.");
   }

    let userMoney = Number(MONEY_FIELD.value);
    //* Lets the user know if they dont have enough money *//
    if (userMoney < total) {
        let amountNeeded = total - userMoney;
        OUTPUT.innerHTML += "<p>Sorry, you don't have enough money.</p>";
        OUTPUT.innerHTML += "<p>You need $" + (amountNeeded.toFixed(2)) + " to pay for your order</p>";
        return;
    } else {

    //* Change after user payment *//
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