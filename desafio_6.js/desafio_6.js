6


let usuario,senha
let tentativas = 0
let ten3 = 3
usuario = prompt("Digite o usuário: ")
        senha = prompt("Digite a senha: ")
        
while ((usuario !== "Rodrigo" || senha != 12345) && tentativas < ten3) {
    tentativas++;
  console.log("Usuário ou senha incorretos, tente novamente")
    if (tentativas < ten3) {
        usuario = prompt("Digite o usuário: ")
        senha = prompt("Digite a senha: ")
      
    }
}

if (usuario === "naty" && senha == 1245) {
    console.log("Bem-vindo!")
} else {
    console.log("Acesso negado.")
}   