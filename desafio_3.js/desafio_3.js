3


let confirmar
let senha = prompt("Crie sua senha: ")
confirmar = prompt("Digite sua sua senha novamente: ")
while(senha !== confirmar ){
    console.log("As senhas não coincidem!\n Digite Novamente!\n")
    senha = prompt("Digite sua senha novamente: ")
}
console.log("Bem Vindo")