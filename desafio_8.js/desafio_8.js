8


let usuario, senha;
let tentativas = 0;
let resgate = 1234;

usuario = prompt("usuário: ");
senha = prompt("senha: ");

while ((usuario !== "admin" || senha !== "1234") && tentativas < 3) {
    tentativas++;
    console.log("usuário e/ou senha inválidos!");
    let cadastro = prompt("esqueceu a senha? (s/n): ");
    if (cadastro === "s") {
        console.log("sua senha é ", resgate);
    }
    if (tentativas < 3) {
        usuario = prompt("\nusuário: ");
        senha = prompt("senha: ");
    }
}

if (usuario === "admin" && senha === "1234") {
    console.log("Deu certo!!");
} else {
    console.log("Número de tentativas excedido");
}*/