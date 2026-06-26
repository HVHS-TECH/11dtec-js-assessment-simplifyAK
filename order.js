let cart = JSON.parse(localStorage.getItem("cart")) || [];

let OUTPUT = document.getElementById("JavaScriptOutput");

let total = 0;

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


function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}