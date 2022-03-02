// o botão nao vai carregar a página quando clicado por causa do preventDefault.
function handleSubmit(event) {
    event.preventDefault();
}
window.onload = function () {
    const submitBtn = document.querySelector("#reset");
    submitBtn.addEventListener("click", handleSubmit);
}

// função pra criar botão de limpar;

function clear() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector("texto");
    for (let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index];
        userInput.value = "";
        userInput.checked = false;
    }
    textArea.value = "";
}