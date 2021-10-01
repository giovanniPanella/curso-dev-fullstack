let listaAtores = [
    {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
    },
  
    {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
    },
  
    {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início'
    },
  ]

  let htmlActors =''

  for (let ator of listaAtores){
      htmlActors= htmlActors+`
        <div class="individual">
           <h2> ${ator.nome}</h2> <br>
            <p>Interpreta o personagem ${ator.personagem} no filme ${ator.filme}</p>
        </div>
      `
        console.log(ator.nome)
        console.log(ator.personagem)
        console.log(ator.filme)

  }
  document.querySelector('#listaAtores').innerHTML = htmlActors