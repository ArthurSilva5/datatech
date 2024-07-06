const botao = document.querySelector(".btnEnviar");
const email = document.querySelector(".email");
const comentario = document.querySelector(".comentario");

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
    if(email.value == "" || comentario.value == ""){
        alert("Preencha os campos antes de enviar o formulário!");
    }
    else{
        alert("Sua sugestão foi enviada! Agradecemos pelo feedback e em breve entraremos em contato!");
    }

    email.value = "";
    comentario.value = "";
})

