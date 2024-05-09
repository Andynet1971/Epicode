class Animali {
  constructor(_name, _description, _image) {
    this.name = _name;
    this.description = _description;
    this.image = _image;
  }
}

const gatti = document.getElementsByClassName("gatto");
const cani = document.getElementsByClassName("cane");

console.log(gatti, "--", cani);
