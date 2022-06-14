//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


let idade = 22;
let humano = true;
let niver = "junho";

console.log("-------------------------------------------------------");
if (idade => 18) {
    console.log("Você é maior de idade");
    maior = idade;
}

if ((maior => 18) && (humano == true)) {
    console.log("Humano,", idade, "anos");
}

if ((niver == "Janeiro") || (niver == "Dezembro")) {
    console.log("Você não recebe presente de natal");
} else {
    console.log("Feliz natal!");
}

console.log("-------------------------------------------------------");
//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let meuNome = "Luan";
let primeiraL = meuNome.charAt(0);
console.log(primeiraL);

if (primeiraL == "R") {
    console.log("Respeitosamente rode rentrar");
} else {
    console.log('Volte para casa, apenas o clube do "R" pode entrar');
}

if ((meuNome.length > 6) || (primeiraL == "E")) {
    console.log("Seu nome tem as requisições necessárias para ganhar um bolo de milho");
} else {
    console.log("Seu nome possui apenas", meuNome.length, "de caracteres, não começa Elegamente com a letra 'E', então não pode comer bolo.");
}
