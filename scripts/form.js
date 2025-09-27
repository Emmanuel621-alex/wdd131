// Product array
const products = [
  { id: "p1", name: "Smartphone X1" },
  { id: "p2", name: "Laptop Pro 15" },
  { id: "p3", name: "Wireless Headphones" },
  { id: "p4", name: "Smartwatch Z" },
  { id: "p5", name: "Tablet Air" }
];

// Populate product dropdown
const productSelect = document.getElementById("productName");

products.forEach(product => {
  let option = document.createElement("option");
  option.value = product.id; // value is product id
  option.textContent = product.name; // display name
  productSelect.appendChild(option);
});
