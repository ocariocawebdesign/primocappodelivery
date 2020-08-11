/*let pedidoPromocaoDelivery01 = {

    nomeCliente: document.querySelector("#nomeCliente").value,
    telCliente: document.querySelector("#telefone").value,
    emailCliente: document.querySelector("#email").value,
    
}*/

var promocao01 = document.querySelector("#promocao01");
var promocao02 = document.querySelector("#promocao02");
var promocao03 = document.querySelector("#promocao03");

var data = new Date();
var diaDaSemana = new Array(7);

diaDaSemana[0] = "Sunday";
diaDaSemana[1] = "Monday";
diaDaSemana[2] = "Tuesday";
diaDaSemana[3] = "Wednesday";
diaDaSemana[4] = "Thursday";
diaDaSemana[5] = "Friday";
diaDaSemana[6] = "Saturday";

var diaPromocao = diaDaSemana[data.getDay()];
console.log(diaPromocao);

if (diaPromocao === "Monday" || diaPromocao === "Wednesday") {
  promocao02.style.display = "none";
  promocao03.style.display = "none";
} else if (diaPromocao === "Tuesday" || diaPromocao === "Thursday") {
  promocao01.style.display = "none";
  promocao03.style.display = "none";
} else if (diaPromocao === "Friday" || diaPromocao === "Saturday") {
  promocao01.style.display = "none";
  promocao02.style.display = "none";
} else {
  promocao01.innerHTML = "<h5>Não temos promoções disponíveis</h5>";
  promocao02.style.display = "none";
  promocao03.style.display = "none";
}
// Habilitar promoção 2 e desabilitar promoção 1 e 3
/*if (n !== "Monday" && n !== "Wednesday" && n !== "Friday" && n !== "Saturday") {
  promocao01.style.display = "none";
  promocao03.style.display = "none";

  // Habilitar promoção 1 e desabilitar promoção 2 e 3
} else if (
  n !== "Tuesday" &&
  n !== "Thursday" &&
  n !== "Friday" &&
  n !== "Saturday"
) {
  promocao02.style.display = "none";
  promocao03.style.display = "none";

  // Habilitar promoção 3 e desabilitar promoção 1 e 2
} else if (n !== "Monday" && n !== "Wednesday" && n !== "Tuesday" && n !== "Thursday") {
  promocao01.style.display = "none";
  promocao02.style.display = "none";

  
  
} else {
    
  promocao01.innerHTML = "Não temos promoções disponiveis hoje."
  promocao02.style.display = "none";
  promocao03.style.display = "none";
}*/
