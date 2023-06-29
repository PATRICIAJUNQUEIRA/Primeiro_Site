let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePasswords = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPasswords = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%¨&*()-+-*/";
let novaSenha = "";


sizePasswords.innerHTML = sliderElement.ariaValueMax;

sliderElement.oninput = function(){
    sizePasswords.innerHTML = this.value;
}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPasswords.classList.remove("hide");
    password.innerHTML = pass;
   
}
function copyPassword(){
    alert("Senha copiada com sucesso!!!")
    navigator.clipboard.writeText(novaSenha);
}