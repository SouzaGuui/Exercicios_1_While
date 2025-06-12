7


let usuario = prompt("Crie seu usuário: ");
let senha = prompt("Crie sua senha: ");

let confirmar1 = prompt("Digite seu usuário: ");
let confirmar2 = prompt("Digite sua senha: ");

while (confirmar1 !== usuario || confirmar2 !== senha) {
    console.log("Usuário e/ou senha incorretos. Tente novamente.\n");
    confirmar1 = prompt("Digite seu usuário novamente: ");
    confirmar2 = prompt("Digite sua senha novamente: ");
}

console.log("Bem-vindo!");