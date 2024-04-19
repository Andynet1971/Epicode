let conteiner = document.getElementById('rec') 
let starOffID = '';

document.addEventListener("DOMContentLoaded", (event) => {
  // starClick();
  var stelle = document.querySelectorAll('.stella');
  stelle.forEach(function (element) {
    element.addEventListener('click', function (event) {
      let id = event.target.id;
      let stelleLenght = stelle.length;

      GetStar(stelle, id, stelleLenght);

    })
  })

})

function GetStar(stelle, id, stelleLenght) {
  for (let i = 0; i < stelleLenght; i++) {
    if (i < id) {
      // se l'indice è minore del id cambia l'src dell'immagine con la stella piena
      stelle[i].src = "./img/star.svg";
    } else {
      // altrimenti cambia l'src dell'immagine con la stella vuota
      stelle[i].src = "./img/star-off.svg";
    }
  }
}
for (let i = 0; i < 10; i++) {
  starOffID +=`<img src="./img/star-off.svg" alt="stellina" class="stella" id="${i + 1}">`; 
}
conteiner.innerHTML = starOffID; //generazione nel DOM delle immagini con id = index+1