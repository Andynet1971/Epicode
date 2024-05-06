const nome = document.getElementById("nome");
const nomeProp = document.getElementById("nomeProp");
const specie = document.getElementById("specie");
const razza = document.getElementById("razza");
const formTag = document.getElementsByTagName("form")[0];

const animali = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  confronta = function (nuovoAnimale) {
    if (this.ownerName === nuovoAnimale.ownerName) {
      return true;
    }
  };
}

const updateList = function () {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  animali.forEach((animale) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <span>${animale.petName} &nbsp</span>
    <span>${animale.ownerName} &nbsp</span>
    <span>${animale.species} &nbsp</span>
    <span>${animale.breed} &nbsp</span>
    `;
    lista.appendChild(newDiv);
  });
};

formTag.addEventListener("submit", function (e) {
  e.preventDefault();
  const valoriForm = new Pet(
    nome.value,
    nomeProp.value,
    specie.value,
    razza.value
  );
  animali.push(valoriForm);
  console.log("CONTATTO CREATO", valoriForm);
  nome.value = "";
  nomeProp.value = "";
  specie.value = "";
  razza.value = "";
  updateList();
});
