let idadeUser = prompt("digite sua idade: ");
let estadoUser = prompt("digite seu estado: ").toUpperCase();

if (idadeUser >= 18 && estadoUser === "PR") {
    document.getElementById("eita").innerText = "você esta apto para iniciar o teste."
    document.getElementById("lascouPerdiTudo").innerText = "Parabéns!";
    document.getElementById("aposta").innerText = "Vá até o detran mais proximo, e tire sua carteira"
} else {
    document.getElementById("lascouPerdiTudo").innerText = "infelizmente você não pode fazer."
    document.getElementById("eita").innerText = "tente no futuro!"
    document.getElementById("aposta").innerText = "Um abraço até logo!"
}