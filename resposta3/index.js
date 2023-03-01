/**
 * Escreva um programa que inverta a ordem dos caracteres de uma string.
 * 
 * IMPORTANTE: Evite usar funções prontas, como, por exemplo, reverse.
 */
var str = "alisson, santana barbosa";
var arrayInvertido = [];
var resultado = "";

//Percorre por cada caractere da string e adiciona cada um em uma posição de um array.
for(i = str.length-1 ; i >= 0; i--) {
  arrayInvertido.push(str[i])
}

//Transforma o array em string e retira as vigulas que separam os caracteres. 
resultado = arrayInvertido.toString().replace(/,/g, "");

console.log(resultado)