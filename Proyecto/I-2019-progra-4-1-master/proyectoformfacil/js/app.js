(function () {
    var LOGINFA = {
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

    LOGINFA.init();
})();
console.log('loading');
$('#nombre').on('click', function(){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('es un nombre', re.test($("#name").val()));
});

$("#name").on('blur', function(){
   console.log('perdi el foco');
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(!re.test($("#email").val())){
       $('.error-name').html('Ingrese un name valido');
   }
});


console.log('loading');
$('#apellido').on('click', function(){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('es un apellido', re.test($("#lastname").val()));
});

$("#lastname").on('blur', function(){
   console.log('perdi el foco');
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(!re.test($("#lastname").val())){
       $('.error-lastname').html('Ingrese un lastname valido');
   }
});

console.log('loading');
$('#apodo').on('click', function(){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('es un apodo', re.test($("#nickname").val()));
});

$("#nickname").on('blur', function(){
   console.log('perdi el foco');
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(!re.test($("#nickname").val())){
       $('.error-nickname').html('Ingrese un nickname valido');
   }
});

console.log('loading');
$('#id').on('click', function(){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('es un id', re.test($("#id").val()));
});

$("#id").on('blur', function(){
   console.log('perdi el foco');
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(!re.test($("#id").val())){
       $('.error-id').html('Ingrese un id valido');
   }
});




    console.log('loading');
    $('#correo').on('click', function(){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log('es un correo', re.test($("#email").val()));
    });

   $("#email").on('blur', function(){
       console.log('perdi el foco');
       let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

       if(!re.test($("#email").val())){
           $('.error-email').html('Ingrese un email valido');
       }
   });

   console.log('loading');
   $('#pass').on('click', function(){
       let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       console.log('es un pass', re.test($("#password").val()));
   });

  $("#password").on('blur', function(){
      console.log('perdi el foco');
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!re.test($("#password").val())){
          $('.error-password').html('Ingrese un password valido');
      }
  });
