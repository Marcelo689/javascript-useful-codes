var palavra = "banana";
var letrasColetadas = [];

while(0 != palavra.length){
    var randomIndice = Math.floor(Math.random() * palavra.length);

    var palavraAleatoria = palavra[randomIndice];
    console.log(palavraAleatoria);
    letrasColetadas.push(palavraAleatoria);
    palavra = palavra.replace(palavraAleatoria, "");   
    console.log(palavra);         
}

console.log(letrasColetadas);