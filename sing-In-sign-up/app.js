

/* Criando variaveis 
    Variaveis são espaços reservados na memória para armazenar informações
*/

const sign_in_btn = document.querySelector("#sign-in-btn");
const sing_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


sing_up_btn.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode");
});


sign_in_btn.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode");
});


