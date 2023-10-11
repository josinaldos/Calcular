function verificarInput(){

    let option = document.querySelector('select').value

    if(option == 'desabilitar'){
        document.querySelector('input').disabled = true

        let mensagem = document.querySelector('#mensagem')

        mensagem.innerHTML = "DESABILITADO"

        mensagem.style.color = "white"
        mensagem.style.backgroundColor = "red"
    }else{
        (option == 'desabilitar')
            document.querySelector('input').disabled = false
    
             mensagem = document.querySelector('#mensagem')
    
            mensagem.innerHTML = ""
    
    }
}