let toast = document.querySelector ('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')
let texto= document.querySelector("#texto")

function removerToast()
{
    toast.classList.remove('visible')
}


botaoCadastrar.onclick = function()
{
    let text2= `Tarefa ${texto} Cadastrada com Sucesso`
    toast.classList.add('visible')
    document.querySelector('#text2').innertext = text2
    setTimeout(removerToast, 5000)
}