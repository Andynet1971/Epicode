const generateCard = function (cards) {
  cards.forEach((book) => {
    const riga = document.getElementById("riga");
    const newCol2 = document.createElement("div");
    newCol = `
    <div class="col">
    <div class="card" style="width: 18rem">
      <img
        src=${book.img}
        class="card-img-top"
        alt="Book Photo"
      />
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Price: ${book.price}  £</p>
        <button type="button" class="btn btn-primary">Scarta</button>
      </div>
    </div>
  </div>`;
    newCol2.innerHTML = newCol;
    riga.appendChild(newCol2);
  });
};

const getData = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((arrayOfBooks) => {
      console.log("OK");
      generateCard(arrayOfBooks);
    })
    .catch(() => {
      console.log("NO");
    });
};

getData();
