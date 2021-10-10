const Main = {
    init: function() { //iniciar a coisa toda
        this.cacheSelectors()
        this.bindEvents()

    },
    cacheSelectors: function(){ //responsavel selecionar os elementos do html e armazenar
        this.$checkButtons= document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector ('#list')
        this.$removeButtons = document.querySelectorAll('.remove')

    },

    bindEvents: function(){ // responsavel adicionar eventos de clique
        const self = this
        this.$checkButtons.forEach ( function(button){
                button.onclick = self.Events.checkButton_click
        })
        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)
        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButton_click



        })
    },

    Events: 
    {
        checkButton_click: function(e)
        {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')
            if(isDone){
                li.classList.remove('done') 
            }
            else{
            li.classList.add('done')
            }

            

        },
            inputTask_keypress: function(e)
            {
                
                const key= e.key
                const value = e.target.value

                if(key ==='Enter')
                {
                    
                    this.$list.innerHTML += `
                        <li>
                            <div class="check"></div>
                            <label class="task">
                                ${value}
                            </label>
                            <button class="remove"></button>
                        </li>
                    
                    `
                    e.target.value = ''
                    this.cacheSelectors()
                    this.bindEvents()

                }

            },
        removeButton_click: function(e){
            let li = e.target.parentElement
            li.classList.add ('removed')

            setTimeout(function(){
                li.classList.add ('hidden')
            },300)    
        }


    }
    



}

Main.init()