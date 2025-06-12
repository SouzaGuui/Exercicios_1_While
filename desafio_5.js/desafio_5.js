5


let usuario,senha
usuario = prompt("Digite seu usuário: ")
senha = prompt("Digite sua senha: ")

while(usuario !== "admin" || senha != 1234){
    console.log("Usuário ou/e Senha incorretos")
    usuario = prompt("\nusuário: ")
    senha = prompt("senha: ")
}
console.log("Senha e Usúarios corretos!")