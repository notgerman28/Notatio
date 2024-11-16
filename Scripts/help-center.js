document.addEventListener('DOMContentLoaded', function () {
    const classesMenu = document.getElementById('classes-menu');
    const classesSubmenu = document.getElementById('classes-submenu');
    const dropdownIcon = classesMenu.querySelector('.dropdown-icon');

    classesMenu.addEventListener('click', function (e) {
        e.preventDefault();
        classesSubmenu.classList.toggle('active');
        dropdownIcon.textContent = classesSubmenu.classList.contains('active') ? '▲' : '▼';
    });
});

document.getElementById('formhelpCenter').addEventListener('submit', (e) =>{

    

    //Array que almacenas los inputs.
    const input = {
        name: document.getElementById('name'),//Nombre completo.
        email: document.getElementById('email'),//Correo electrònico.
        passsword: document.getElementById('password-segurity'),//Contrasela de seguridad.
        textarea: document.getElementById('textarea-input'),//Descripciòn del problema.
        spanMesseger: document.getElementById('text-messeger'),//Mensages de error.
        sendProblems: document.getElementById('send-problems'),//Boton para enviar imformacion
        errordivPassword: document.getElementById('div-error-password-seguriy'),//Ventana de error de caract.
        xBTNdUSPLAY: document.getElementById('x-displayErrorWimdows')//Quitar ventana de error de la contraseña
    }

    // Campos de regex
    const nameregex =/^[A-ZÁÉÍÓÚÜÑa-záéíóúüñ]{2,}(?:[ '-][A-ZÁÉÍÓÚÜÑa-záéíóúüñ]{2,})*$/;

    //validacion del campo nombre.
    if(input.name.value.trim() === "" || !nameregex.test(input.name.value)){
        input.name.style.border='solid 1px red';
        input.spanMesseger.textContent='Existe campos vacios';


        e.preventDefault();
    }else{
        input.name.style.border='solid 1px green';
        input.spanMesseger.textContent='';
      
    }

    //Validacion del correo electronico
    if(input.email.value.trim() === ""){
        input.email.style.border='solid 1px red';
        input.spanMesseger.textContent='Existe campos vacios';
  
        e.preventDefault();
    }else{
        input.email.style.border='solid 1px green';
        input.spanMesseger.textContent='';
   
    }

    //Validacion de la contraseña de seguridad
    if(input.passsword.value.trim() === ""){
        e.preventDefault();
        input.passsword.style.border='solid 1px red';
  

    }else if(input.passsword.value.length !== 9){
        e.preventDefault();
        input.errordivPassword.style.left='0';
    }else{
        input.passsword.style.border='solid 1px green';
        input.spanMesseger.textContent='';
 
        input.errordivPassword.style.left='600%';
    }
    
    //Validacion del textarea
    if(input.textarea.value.trim() === "" || input.textarea.value.length < 15 || !isNaN(input.textarea.value)){
        e.preventDefault();
        input.textarea.style.border='solid 1px red';
        input.spanMesseger.textContent='Existe campos vacios';
 
    }else{
        alert('Mensaje enviado');
        input.textarea.style.border='solid 1px green';
        input.spanMesseger.textContent='';
 
    }

    //Evento para desplegar  unidades
    input.xBTNdUSPLAY.addEventListener('click',() =>{
        input.errordivPassword.style.left='600%';
        
    })
});

