

// Crie uma array com anos que o brasil ganhou a copa 1959, 1962, 1970, 1994, 2002

// Interagindo com uma array com forEach
let kimonosSize = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'];

let kimonos = kimonosSize.forEach( (size) =>{

    //console.log(ano, anosBrasilCampeao.length);
    console.log(`Tamanhos: ${size}`);

})

// ForEach parametros
 //console.log(item) item atual do lool da array
 //console.log(index) número do index da array
 //console.log(array) array completa

 //Arrays like são estruturas parecidas com arrays mas não são
// nodeList, HTMLCollection

//Exeomplo

titulos = document.querySelectorAll('h1'); // retorna um HTML Collection
// Para transformar em array

titulosArray = Array.from(titulos);

console.log(titulos);
titulosArray.forEach((item, index, array)=> console.log(item.innerText, index, array));






const pizza_sabores = new Object();

pizza_sabores["alho"] = "Mussarela alho e orégano (Mossarella, garlic and oregano).";
pizza_sabores["calabresa"] = "Mussarela, calabresa, cebola,azeitonas e orégano.(Mossarella, calabresa, onions, olives and oregano)";
pizza_sabores["cappo"] = "Mussarela, calabresa fatiada, bacon, tomate e orégano. (Mossarella, sliced calabresa, bacon, tomato and oregano)";
pizza_sabores["champignon"] = "Mussarela, champignon, azeitonas e orégano. (Mossarella, champignon, olives and oregano)";
pizza_sabores["frango_catupiry"] = "Mussarela, frango desfifado com catupiry e orégano. (Mossarella, shredded chicken, catupiry and oregano)";
pizza_sabores["margherita"] = "Mussarela, tomates frescos, manjericão e orégano. (Mossarella, fresh tomatos, basil and oregano)";
pizza_sabores["napolitana"] = "Mussarela, parmesão, tomates frescos manjerição e orégano. (Mossarella, fresh tomatos, basil and oregano)";
pizza_sabores["pepperoni"] = "Mussarela, pepperoni e orégano.(Mossarella, pepperoni and oregano)";
pizza_sabores["presunto"] = "Mussarela, presunto, azeitonas e orégano. (Mossarella, ham, olives and oregano)";
pizza_sabores["quatro_quejos"] = "Mussarela, provolone, catupiry, parmesão e orégano. (Mossarella, provolone, catupiry, parmesan and oregano)";
pizza_sabores["veneza"] = "Mussarela, champignon, presuntoe orégano. (Mossarella, champignon, ham and oregano)";
pizza_sabores["bambina"] = "Mussarela, calabresa, champignon, pimentão, azeitonas e orégano.(Mossarella, calabresa, champignon, pepper, olives and oregano)";

