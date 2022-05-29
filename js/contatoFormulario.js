function submitForm (event) {
    event.preventDefault();
    
    let url = "http://127.0.0.1:5500";

    const inputs = document.querySelectorAll(".contato__formulario__input");
    console.log(inputs);

    // inputs.forEach(".contato__formulario__input") {
    //     this.addEventListener('blur', (evento) => {
            
    //     })
    // }

    const formPreenchido = 0;
    if(formPreenchido === 4) {
        //apagar o valor do campo após enviar o formulário
        document.querySelector('[data-form-nome]').value = "";
        document.querySelector('[data-form-email]').value = "";
        document.querySelector('[data-form-assunto]').value = "";
        document.querySelector('[data-form-mensagem]').value = "";  
    }
}