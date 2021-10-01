
let opcoes 


for( let contador=2021; contador >=1900; contador--){
    opcoes= opcoes+`<option>${contador}</option>`
 
}
let selecionar = '<option> --Selecionar--</option>'
document.querySelector('#ano').innerHTML= selecionar+opcoes

let lista=''
let clientes =['Giovanni','Lucas', 'Fulano','Ciclano']

for( let contador =0;contador<=clientes.length-1;contador++)
{
 lista= lista+ `<li> ${clientes[contador]}</li>`
}
document.querySelector('#listaC').innerHTML = lista