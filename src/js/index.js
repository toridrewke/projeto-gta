const botao = document.querySelector(".btn-plataforma");
const elementoPlataforma = document.querySelector(".btn-plataforma .plataforma")

botao.addEventListener("click", () => {

    const botaoEstaAberto = elementoPlataforma.classList.contains("ativo");
    console.log(botaoEstaAberto);

    elementoPlataforma.classList.toggle("ativo");
});