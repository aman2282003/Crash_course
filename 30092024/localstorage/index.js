const handlehome = () => {
  console.log("This is home page");
  window.location.href = "./index.html";
};

const handlecart = () => {
  console.log("This is cart page");
  window.location.href = "./cart.html";
};

let user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];



function addToCart(user) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get existing cart or initialize an empty array
  cart.push(user); 
  localStorage.setItem("cart", JSON.stringify(cart)); 
  console.log(`${user.name} added to cart`);
}




user.forEach((el) => {
  let card = document.createElement("div");
  card.id = "card";
  let name = document.createElement("p");
  name.innerText = `Name : ${el.name}`;
  let username = document.createElement("p");
  username.innerText = `UserName: ${el.username}`;
  let email = document.createElement("p");
  email.innerText = `Mail: ${el.email}`;
  let button = document.createElement("button");
  button.innerText = "Add to cart";
  button.addEventListener("click", () => {
    addToCart(el); 
  });
  card.append(name, username, email, button);
  container.append(card);
});
