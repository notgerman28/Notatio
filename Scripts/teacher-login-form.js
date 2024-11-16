document.getElementById('formInit-sesion').addEventListener('submit', (e) =>{
    
    const inputInitSesion = {
        email: document.getElementById('inputemail-sesion'),
        password : document.getElementById('inputpassword-sesion'),  
        errorPassword: document.getElementById('div-error-password-seguriy'),
        x:document.getElementById('x-displayErrorWimdows')
    }

    if( inputInitSesion.email.value.trim() === "" ){
          inputInitSesion.email.style.border='solid 1px red'
        alert('El campo email se encuentra vacio')
        e.preventDefault();
    }else{
   
          inputInitSesion.email.style.border='solid 1px green'
    }

    if(inputInitSesion.password.value.trim() === ""){
        e.preventDefault();
        inputInitSesion.password.style.border='solid 1px red'
        alert('El campo contraseña se encuentra vacio')
    }else if(inputInitSesion.password.value.length !== 9){
        alert('No hay componenetes suficientes')
        inputInitSesion.password.style.border='solid 1px red'
        inputInitSesion.errorPassword.style.left='2%';
        e.preventDefault();
    }else{
        inputInitSesion.errorPassword.style.left='600%';
        inputInitSesion.password.style.border='solid 1px green'
    }

    inputInitSesion.x.addEventListener('click',()=>{
        inputInitSesion.errorPassword.style.left='600%'
    })

});