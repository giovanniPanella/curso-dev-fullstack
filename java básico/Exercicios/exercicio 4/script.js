function entrar() {
    let inputNome = prompt('Digite o seu Nome:')
    inputNome= inputNome.toUpperCase()
   
    let inputIdade = prompt('Digite o sua Idade:')
    let idade = parseInt(inputIdade) 
    let maiorOuMenor
    

    if ((inputNome ==='')||(inputIdade==='')) {
        alert('OPA FALTOU ALGO AI, TENTE DENOVO!!')
    }
    else{
        
        if (idade >= 18) {
        maiorOuMenor = 'MAIOR'
     
        } else if (idade < 18) {
        maiorOuMenor = 'MENOR'
        
        }
        
        let mensagemPersonalizada = ''
        
        if (inputNome === 'GIOVANNI' ) {
        mensagemPersonalizada = 'SEU NOME É LINDO!'
      
        }
        else{
        mensagemPersonalizada = 'SEU NOME É COMUM!'
        
        }
        
        let msg1 = `OLÁ ${inputNome}, VOCÊ É ${maiorOuMenor} DE IDADE`
        
        document.querySelector('#boasVindas').innerHTML = msg1
        document.querySelector('#msgP').innerHTML = mensagemPersonalizada
    }
}