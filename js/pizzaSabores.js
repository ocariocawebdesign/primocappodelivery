
const saboresPizzas = document.querySelector("#sabores");
const pizzaSabores01 = [

  "Muzzarela",
  "Alho e óleo",
  "Presunto",
  "Bambina",
  "Calabresa",
  "Califórnia",
  "Cappo",
  "Carne seca com abóbora",
  "Champignon",
  "Francesa",
  "Frango com catupiry",
  "Genova",
  "Margherita",
  "Napolitana",
  "Palmito",
  "Pepperoni",
  "Portuguesa",
  "Primo",
  "Quatro queijos",
  "Tomate seco com rúcula",
  "Veneza",
];

const buttonApp = document.querySelector("#botaoApp");
const resultButton = document.querySelector("#resultButton");

buttonApp.addEventListener("click", () => {
  resultButton.innerHTML = `<h6>Esse é o sabor:</h6> <p>${pizzaSabores01[10]}</p>`;
});

