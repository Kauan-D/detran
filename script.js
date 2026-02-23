let idadeUser = prompt("digite sua idade: ");
let estadoUser = prompt("digite seu estado: ").toUpperCase();

if (idadeUser >= 18 && estadoUser === "PR") {
    document.getElementById("eita").innerText = "você esta apto para iniciar o teste."
    document.getElementById("lascouPerdiTudo").innerText = "Parabéns!";
    document.getElementById("aposta").innerText = "Vá até o detran mais proximo, e tire sua carteira"
    document.getElementById("vi").src = "https://external-preview.redd.it/hvvjislTBrCdjJzZFBWjB-YJULnd_ctB2tYINq2RzNs.jpg?auto=webp&s=e7ca588ff24cfee4429f30d07c88be9a927ee663"
} else {
    document.getElementById("lascouPerdiTudo").innerText = "infelizmente você não pode fazer."
    document.getElementById("eita").innerText = "tente no futuro!"
    document.getElementById("aposta").innerText = "Um abraço até logo!"
    document.getElementById("te").src = "https://petvi.com.br/cdn/shop/articles/688131c2753c9iStock-1326054280.jpg?v=1760630096&width=1100"
}