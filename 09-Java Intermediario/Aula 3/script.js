//seletor por ID
document.querySelector('#titulo').innerHTML = '<i>exemplo</i>'
//seletor por TAG
document.querySelector('a').innerText = '<b>Teste ancora<b?'

//selecionando mais de um item por tag
let ancoras = document.querySelectorAll('a')
ancoras.forEach(function(elemento){ // função anonima / callback

elemento.innerHTML= 'Agora tudo'
})

//selecionando mais de um item por classe

let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    
    box.innerHTML = 'box '+ (index+1)
})