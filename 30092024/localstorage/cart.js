const handlehome = () => {
  console.log("This is home page");
  window.location.href = "./index.html";
};

const handlecart = () => {
  console.log("This is cart page");
  window.location.href = "./cart.html";
};


function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get the cart data from localStorage
  let container = document.getElementById("container"); // The container where we will append cart items
  container.innerHTML = ""; 

  
  cart.forEach((el, index) => {
    let card = document.createElement("div");
    card.id = "card";

    let name = document.createElement("p");
    name.innerText = `Name : ${el.name}`;

    let username = document.createElement("p");
    username.innerText = `UserName: ${el.username}`;

    let email = document.createElement("p");
    email.innerText = `Mail: ${el.email}`;

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove from cart";
    removeButton.addEventListener("click", () => {
      removeFromCart(index); // Call remove function when button clicked
    });

    card.append(name, username, email, removeButton);
    container.append(card);
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart)); 
  displayCart(); 
}


window.onload = displayCart;
