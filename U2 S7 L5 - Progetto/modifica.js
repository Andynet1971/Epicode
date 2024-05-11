class ProductType {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

const product = new ProductType();

const addressBarContent = new URLSearchParams(location.search);
console.log(addressBarContent);
const eventId = addressBarContent.get("eventId");
console.log(eventId);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZmVlOTgxODQ0MjAwMTUzNzU5ZGEiLCJpYXQiOjE3MTUzMzg5ODUsImV4cCI6MTcxNjU0ODU4NX0.Sz4IpOetI31X9qIxyN3lXAzdIgmQ0Fz6XcjFGdYFs0w";

function homePage() {
  window.location.href = "./index.html";
}

function riceviDati() {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dettagli dell'evento");
      }
    })
    .then((event) => {
      console.log("dati salvati", event);

      document.getElementById("inputName").value = event.name;
      document.getElementById("description").value = event.description;
      document.getElementById("brand").value = event.brand;
      document.getElementById("imageUrl").value = event.imageUrl;
      document.getElementById("price").value = event.price;
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
}

function inviaForm() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZmVlOTgxODQ0MjAwMTUzNzU5ZGEiLCJpYXQiOjE3MTUzMzg5ODUsImV4cCI6MTcxNjU0ODU4NX0.Sz4IpOetI31X9qIxyN3lXAzdIgmQ0Fz6XcjFGdYFs0w";
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dettagli dell'evento");
      }
    })
    .then((event) => {
      console.log("dati salvati", event);
      homePage();
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
}

function salvaForm() {
  product.name = document.getElementById("inputName").value;
  product.description = document.getElementById("description").value;
  product.brand = document.getElementById("brand").value;
  product.imageUrl = document.getElementById("imageUrl").value;
  product.price = document.getElementById("price").value;
  console.log(product);
  inviaForm();
}

function reset() {
  document.getElementById("myForm").reset();
}

riceviDati();
