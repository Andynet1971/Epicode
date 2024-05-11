/*
Purtroppo non sono riuscito a completare tutto perchè sono ancora un pò lento 
ed ho trovato diversi problemi che mi hanno portato via molto tempo
Le cose funzionanti sono : Creazione di nuovi prodotti, Eliminazione dei prodotti, Caricamento
dei prodotti sulla HomePage e reset del form e la Modifica
*/

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZmVlOTgxODQ0MjAwMTUzNzU5ZGEiLCJpYXQiOjE3MTUzMzg5ODUsImV4cCI6MTcxNjU0ODU4NX0.Sz4IpOetI31X9qIxyN3lXAzdIgmQ0Fz6XcjFGdYFs0w";

function restoreData(prodotti) {
  console.log("prodotti", prodotti);
  prodotti.forEach((prodotto, i) => {
    const productsRow = document.getElementById("productsRow");
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    console.log(prodotto.name);

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
      <a href="./modifica.html?eventId=${prodotto._id}" class="btn btn-primary btn-sm">Modifica</a>
      <a
        href="./detail.html?eventId=${prodotto._id}"
        class="btn btn-primary btn-sm"
        >Elimina</a
      >
    </div>
  </div>
    `;
    productsRow.appendChild(newCol);
  });
}

function riceviDati() {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
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
      restoreData(event);
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
}

riceviDati();
