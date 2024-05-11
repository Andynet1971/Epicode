const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZmVlOTgxODQ0MjAwMTUzNzU5ZGEiLCJpYXQiOjE3MTUzMzg5ODUsImV4cCI6MTcxNjU0ODU4NX0.Sz4IpOetI31X9qIxyN3lXAzdIgmQ0Fz6XcjFGdYFs0w";

const addressBarContent = new URLSearchParams(location.search);
console.log(addressBarContent);
const eventId = addressBarContent.get("eventId");
console.log(eventId);

function restoreData(prodotto) {
  console.log("prodotti", prodotto);

  const productsRow = document.getElementById("productsRow");
  const newCol = document.createElement("div");
  newCol.classList.add("col");

  newCol.innerHTML = `
      <div class="card">
      <img
        src="${prodotto.imageUrl}"
        class="card-img-top"
        alt="SmartPhone Image"
      />
      <div class="card-body">
        <h5 class="card-title">${prodotto.name}</h5>
        <p class="card-text">${prodotto.brand}</p>
        <p class="card-text">${prodotto.description}</p>
        <p class="card-text">${prodotto.price}</p>
        <button type="button" class="btn btn-primary btn-sm">Modifica</button>
        <button type="button" class="btn btn-primary btn-sm" onclick="cancellaProdotto()">Cancella</button>
      </div>
    </div>
      `;
  productsRow.appendChild(newCol);
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
      console.log("evento", event);
      restoreData(event);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
}

function cancellaProdotto() {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
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
      alert("PRODOTTO ELIMINATO");
      window.location.href = "./index.html";
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
}

riceviDati();

function eliminaProdotto() {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(product),
  });
}
