let clientes=[
    {
        nome:'Giovanni',
        idade:38,
        linguagens:['javascript','python','php']
    },

    {
        nome:'Panella',
        idade:36,
        linguagens:['JAVA','C#','C']
    },
    {
        nome:'Gilles',
        idade:32,
        linguagens:['go','C++','C']
    }
]
/*for(let contador=0; contador<=clientes.length-1;contador++){
    console.log(clientes[contador].nome)
}

for(let cliente of clientes){
    console.log(cliente.nome)
    console.log(cliente.idade)

}*/

let htmlClientes=''

for(let cliente of clientes){
    let listaLinguagens =''
    for(let linguagem of cliente.linguagens){
        listaLinguagens += `<li> ${linguagem} </li>`
    }

    htmlClientes= htmlClientes+`
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade</b> ${cliente.idade} <br>
            <b>Linguagens</b> <br>
            <ul>
             ${listaLinguagens}
            </ul>
        </li>`

}

document.querySelector('#listaClientes').innerHTML = htmlClientes