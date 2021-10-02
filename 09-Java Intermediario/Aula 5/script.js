let botaoTeste = document.querySelector('#botaoTeste')
let cont=0
function cliqueBotao(){
    cont++
    console.log('mensagem 1')
    if(cont>=5){
    botaoTeste.removeEventListener('click', cliqueBotao)
    }
}
//addEventlistener
botaoTeste.addEventListener('click',cliqueBotao)

//botaoTeste.addEventListener('click', function(){
 //   console.log('mensagem 2')
    
 //   })