document.getElementById('form-register-teacher').addEventListener('submit', (e)=>{

    const inputRegister = {
        nameteacherRegister: document.getElementById('nameinputregistesteacher'),
        emailteachertRegister: document.getElementById('emaulinputregistesteacher'),
        nameusersteacherRegister: document.getElementById('nameuserinputregistesteacher'),
        namesinstitutiontteacherRegister: document.getElementById('nameinstitutioninputregistesteacher'),
        passwordteacherRegister: document.getElementById('passwordinputregistesteacher'),
        errorPassword: document.getElementById('div-error-password-seguriy'),
        x:document.getElementById('x-displayErrorWimdows')
    }

    const nameregex =/^[A-ZÁÉÍÓÚÜÑa-záéíóúüñ]{2,}(?:[ '-][A-ZÁÉÍÓÚÜÑa-záéíóúüñ]{2,})*$/;

    if(inputRegister.nameteacherRegister.value.trim() === "" , !nameregex.test(inputRegister.nameteacherRegister.value)){
        alert('El campo nombre se encuentra vacio')
        inputRegister.nameteacherRegister.style.border='solid 1px red';
        e.preventDefault();
    }else{
        inputRegister.nameteacherRegister.style.border='solid 1px green';
        
    }


    if(inputRegister.emailteachertRegister.value.trim() === ""){
        alert('El correo se encuentra vacio')
        inputRegister.emailteachertRegister.style.border='solid 1px red';
        e.preventDefault();
    }else{
    
        inputRegister.emailteachertRegister.style.border='solid 1px green';
        
    }

    if(inputRegister.nameusersteacherRegister.value.trim() === "", !nameregex.test(inputRegister.nameusersteacherRegister.value)){
        alert('El campo nombre usuario se encuentra vacio')
        inputRegister.nameusersteacherRegister.style.border='solid 1px red';
        e.preventDefault();
    }else{

        inputRegister.nameusersteacherRegister.style.border='solid 1px green';
        
    }


    if(inputRegister.namesinstitutiontteacherRegister.value.trim() === "", !nameregex.test(inputRegister.namesinstitutiontteacherRegister.value)){
        alert('El campo nombre de institucion se encuentra vacio')
        inputRegister.namesinstitutiontteacherRegister.style.border='solid 1px red';
        e.preventDefault();
    }else{
     
        inputRegister.namesinstitutiontteacherRegister.style.border='solid 1px green';
        
    }

    if(inputRegister.passwordteacherRegister.value.trim() === ""){
        alert('El campo nombre de institucion se encuentra vacio')
        inputRegister.passwordteacherRegister.style.border='solid 1px red';
        e.preventDefault();
    }else if(inputRegister.passwordteacherRegister.value.length !== 9){
        alert('La contrase; no tiene 9 caracteres')
        inputRegister.errorPassword.style.left='2%';
        inputRegister.passwordteacherRegister.style.border='solid 1px red';
        e.preventDefault();

    }else{
        inputRegister.errorPassword.style.left='600%';
        inputRegister.passwordteacherRegister.style.border='solid 1px green';
        
    }

    inputRegister.x.addEventListener('click',()=>{
    inputRegister.errorPassword.style.left='600%'
    })
    
});