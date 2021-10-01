function entrar() 
{
  let inputNome = prompt('Digite o seu Nome:')
  let inputIdade = prompt('Digite o sua Idade:')
  let idade = parseInt(inputIdade)
  inputNome.toUpperCase()
  let maiorOuMenor
  if ((inputNome ='')||(inputIdade =''))
  {
    alert('VC nao inseriu um dado')
  }
  else if (idade >= 18) 
  {
      maiorOuMenor = 'maior'
  } 
   else if (idade < 18) 
  {
    maiorOuMenor = 'menor'
  
 
    let mensagemPersonalizada = ''
  
    if (inputNome === 'GIOVANNI') {
      mensagemPersonalizada = 'QUE NOME LINDO HEIN!!!'
    }
    else{
      mensagemPersonalizada = 'QUE NOME COMUM :/'
    }
  
    let saudacao = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`
  
    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
  }
}


