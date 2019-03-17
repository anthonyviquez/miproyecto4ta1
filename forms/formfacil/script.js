(function () {
    var FACIL = {
        init: function () {
            this.addEvents();
        },

        addEvents: function(){
            $('#form-login').on('submit', function(event){
                //detengo el envio del form
                event.preventDefault();

                console.log('detengo el envio del form');
                
                console.log( 'data', $('#form-login').serialize() + '&total=3000$' );

                //tambien hacemos uso de ajax
            });
        }
    }

    FACIL.init();
})();