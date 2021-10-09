const Main = {
    init: function() { //iniciar a coisa toda
        this.cacheSelectors()
        this.bindEvents()

    },
    cacheSelectors: function(){ //responsavel selecionar os elementos do html e armazenar
        this.checkButtons= document.querySelectorAll('.check')

    },

    bindEvents: function(){ // responsavel adicionar eventos de clique
        const self = this
        this.checkButtons.forEach ( function(button){
                button.onclick = self.Events.checkButton_click
        })
    },

    Events: {
        checkButton_click: function(){
            alert('OK')
        }
    }



}

Main.init()