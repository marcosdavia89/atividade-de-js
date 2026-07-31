// Entrada de dados
let nome = prompt("Digite seu nome completo:");
let cargo = prompt("Digite seu cargo ou função:");
let empresa = prompt("Digite sua empresa ou escola:");
let email = prompt("Digite seu e-mail:");

// Nome em maiúsculas
nome = nome.toUpperCase();

// Exibição no console
console.log("===== CARTÃO DE VISITA =====");
console.log("Nome: " + nome);
console.log("Cargo/Função: " + cargo);
console.log("Empresa/Escola: " + empresa);
console.log("E-mail: " + email);
console.log("============================");

// Alerta
alert("Cartão de visita gerado com sucesso!");
