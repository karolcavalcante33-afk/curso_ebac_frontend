const formulario = document.getElementById("meuFormulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const A = Number(document.getElementById("campoA").value);
    const B = Number(document.getElementById("campoB").value);

    if (B > A) {
        mensagem.textContent = "✔️ Formulário válido! O número B é maior que o A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "❌ Formulário inválido! O número B deve ser MAIOR que o A.";
        mensagem.style.color = "red";
    }
});
