9


let saida
let usuario,senha
usuario = prompt("Digite seu usuário: ")
senha = prompt("Digite sua senha: ")

while(usuario !== "admin" || senha != 1234){
    usuario = prompt("\nusuário: ")
    senha = prompt("senha: ")
}
console.log("Você está logado!")
console.log ("Digite 'sair' para sair")
saida = prompt("").toLowerCase()
if (saida == "sair"){
    console.log("Você saiu")
}
else {
    console.log("Você não saiu")
    while(saida !== "sair"){
   saida = prompt("Digite novamente: ").toLowerCase()
}
}
console.log("Você saiu")