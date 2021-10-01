let tabDesej = prompt('Digite Qual Tabuada você quer Saber')
let conversao= parseInt(tabDesej)

let msg = (`Legal Você Digitou o Número ${conversao} <br>`)
document.write(msg)

for(let cont =1; cont<=10; cont++){
    let resultado= conversao*cont
    msg = (`${conversao} x ${cont} = ${resultado}<br>`)
    document.write(msg)
}