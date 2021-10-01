let nome = prompt('Digite seu Nome')
nome=nome.toUpperCase()
let idade = prompt('Digite a idade')



if((idade>=18)&(nome==="THOMAS ANDERSON"))
{
    document.write(`Olá ${nome} você é Maior de idade, e Você é personagem do filme The Matrix!`)
}
else
{
    if(idade>=18)
    {
        document.write(`Olá ${nome} vocÊ é maior de Idade, seu nome é comum`)
    }
    else
    {
        document.write(`Olá ${nome} você é Menor de idade e seu nome é comum`)    
    }
}