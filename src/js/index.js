// OBJETIVO 1: Clicar no botão e fazer com que o botão seja selecionado
// Passo 1: Pegar os botões
// Passo 2: Adicionar um evento de clique aos botões
// Passo 3: Adicionar a classe selected ao botão clicado
// Passo 4: Remover a classe selected de outro botão

const buttons = document.querySelectorAll(".menu__button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedButton = document.querySelector(".menu__button--selected");
    selectedButton.classList.remove("menu__button--selected");

    const selectedCharacter = document.querySelector(".character--selected");
    selectedCharacter.classList.remove("character--selected");

    button.classList.add("menu__button--selected");
    characters[index].classList.add("character--selected");
  });
});
