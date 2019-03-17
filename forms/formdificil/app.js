(function(){
    var DIFICIL = {
        init: function(){
            this.addEvents();
            console.log('this.cacheElements', this.cacheElements.$btnSubmitForm);
        },

        addEvents: function(){
            this.cacheElements.$btnSubmitForm.on('click', function(){
                console.log('click');
                this.sendInfo();
            }.bind(this));            
        },

        cacheElements: {
            $btnSubmitForm : $('#btn-submit-form'),
            $inputUser : $('#input-user'),
            $inputPassword : $('#input-pass'),
        },

        sendInfo : function(){
            var user = this.cacheElements.$inputUser.val();
            var pass = this.cacheElements.$inputPassword.val();

            var data = {
                user : user,
                pass : pass
            }

            //enviamos al servidor
            console.log('data', data);

            //ajax se usa para la comunicacion cliente - servidor
            $.ajax({
                data: data,
                type: 'post',
                url: '',
                success: function (result, status, xhr) {
                  
                }
            });
        }
    }

    DIFICIL.init();
})();