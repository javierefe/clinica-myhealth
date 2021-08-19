
// const btnRegister = document.querySelector("#btnRegister");



// btnRegister.addEventListener("click", (event) => {
//     event.preventDefault();
    
// })

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const cel = document.getElementById("cel")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexCelular = /^9[0-9]{8}$/;
    parrafo.innerHTML= "";
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true;
    }

    if(!regexCelular.test(cel.value)){
        warnings += `El celular no es valido <br>`
        entrar = true;
    }
    if(entrar) {
        parrafo.innerHTML = warnings
    }
})
