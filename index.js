console.log("Hello world!")



const OUTPUT = document.getElementById("JavaScriptOutput")



let cart = JSON.parse(localStorage.getItem("cart")) || [];


//*Functions *//

function getNameInput() {
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<br>Your name is "+ userName+""
}

function calculateChange(_money, _price) {
    let change = _money - _price;
    return change;
}

function addToCart(name, price) {
    let item = {
        name: name,
        price: price
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    OUTPUT.innerHTML = "<br>Added " + name + " ($" + price.toFixed(2) + ") to cart.";
}

//*End of Functions*//







