let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

function showProducts() {
  let str = "";
  products.map(value => {
    str += `<li>
      ${value.name} - $${value.price} 
      <div>
      <button onclick="addToCart(${value.id})">Add to Cart</button>
      <button onclick="increment(${value.id})">Increase</button>
      <button onclick="decrement(${value.id})">Decrease</button>
      </div>
    </li>`;
  });
  document.getElementById('root').innerHTML = str;
}

function addToCart(id) {
    if(!cart[id]){
        cart = { ...cart, [id]: 1 };
    }
  showCart();
}

function increment(id) {
  if (cart[id]) {
    cart = { ...cart, [id]: cart[id] + 1 };
  } else {
    cart = { ...cart, [id]: 1 };
  }
  showCart();
}

function decrement(id) {
  if (cart[id] > 1) {
    cart = { ...cart, [id]: cart[id] - 1 };
  } else {
    delete cart[id];
  }
  showCart();
}

function showCart() {
  let str1 = "<h3>Cart Items:</h3><ul>";
  products.map(value => {
    if (cart[value.id]) {
      str1 += `<li>${value.name} -- Qty: ${cart[value.id]} -- Total: $${cart[value.id] * value.price}</li>`;
    }
  });
  str1 += "</ul>";

  const total = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] ?? 0);
  }, 0);

  str1 += `<h4>Order Value: $${total}</h4>`;
  document.getElementById("card").innerHTML = str1;
}

showProducts();
showCart();