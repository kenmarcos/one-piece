const buttons = document.querySelectorAll(".menu__button");
const characters = document.querySelectorAll(".character");

chooseCharacter();

function chooseCharacter() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      deselectButton();

      deselectCharacter();

      button.classList.add("menu__button--selected");
      characters[index].classList.add("character--selected");
    });
  });
}

function deselectCharacter() {
  const selectedCharacter = document.querySelector(".character--selected");
  selectedCharacter.classList.remove("character--selected");
}

function deselectButton() {
  const selectedButton = document.querySelector(".menu__button--selected");
  selectedButton.classList.remove("menu__button--selected");
}
