(function(){
    var LOGIN = {
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
            $inputName : $('#input-name'),
            $inputLastname : $('#input-lastame'),
            $inputNickname : $('#input-nickname'),
            $inputId : $('#input-id'),
            $inputEmail : $('#input-correo'),
            $inputPassword : $('#input-pass'),
        },

        sendInfo : function(){
            var name = this.cacheElements.$inputName.val();
            var lastname = this.cacheElements.$inputLastname.val();
            var nickname = this.cacheElements.$inputNickname.val();
            var id = this.cacheElements.$inputId.val();
            var correo = this.cacheElements.$inputEmail.val();
            var pass = this.cacheElements.$inputPassword.val();

            var data = {
                name : name,
                lastname : lastname,
                nickname : nickname,
                id : id,
                correo : correo,
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

    LOGIN.init();
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
