
window.addEventListener('load', () => {
    let formNombre = qs('.form-nombre');
    let inputName = formNombre.elements[0];
    let formSurname = qs('.form-surname');
    let inputlastName= formSurname.elements[0];
    let formEmail = qs('.form-email');
    let inputEmail = formEmail.elements[0];
    
    let formPassword = qs('.passwordActual');
    let inputPasswordActual = qs('#passwordActual');
    let inputPass1 = qs('#pass1');
    let inputPass2 = qs('#pass2');

    let formProfile= qs('#profile');
    let inputProfile= formProfile.elements[0];

    let error = {};

    (inputProfile.value) ? inputProfile.value = "" : null

    /* Expresiones regulares */
    let regLetras = /^[a-zA-Z\sñáéíóúü]*$/;
    let regExEmail = /^(([^<>()\[\]\,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let oneMB = 1048576;

    /* Name */
    let nameValidations = () => {
        switch (true) {
            case !inputName.value:
                errorName.innerHTML = 'Debes ingresar un nombre';
                inputName.classList.add('is-invalid');
               error.name = true;
                break;
            case inputName.value.length <= 3:
                errorName.innerHTML = 'El campo nombre debe tener al menos dos letras';
                inputName.classList.add('is-invalid');
                error.name = true;
                break;
            case !regLetras.test(inputName.value):
                errorName.innerHTML = 'Debes ingresar solo letras';
                inputName.classList.add('is-invalid');
                error.name = true;
                break;
            default:
                errorName.innerHTML = '';
                inputName.classList.remove('is-invalid');
                inputName.classList.add('is-valid');
                error.name = false;
                break;
        }
    }
    let lastNameValidations = () => {
        switch (true) {
            case !inputlastName.value:
                errorlastName.innerHTML = 'Debes ingresar un apellido';
                inputlastName.classList.add('is-invalid');
                error.lastName = true;
                break;
            case inputlastName.value.length <= 2:
                errorlastName.innerHTML = 'El campo apellido debe tener al menos dos letras';
                inputlastName.classList.add('is-invalid');
                error.lastName = true;
                break;
            case !regLetras.test(inputlastName.value):
                errorlastName.innerHTML = 'Debes ingresar solo letras';
                inputlastName.classList.add('is-invalid');
                error.lastName = true;
                break;
            default:
                errorlastName.innerHTML = '';
                inputlastName.classList.remove('is-invalid');
                inputlastName.classList.add('is-valid');
                error.lastName = false;
                break;
        }
    }
    
    let emailValidations = () => {
        switch (true) {
            case !inputEmail.value:
                errorEmail.innerHTML = 'El campo email es obligatorio';
                inputEmail.classList.add('is-invalid');
                error.email = true;
                break;
            case !regExEmail.test(inputEmail.value):
                errorEmail.innerHTML = 'Debes ingresar un email válido';
                inputEmail.classList.add('is-invalid');
                error.email = true;
                break;
            default:
                errorEmail.innerHTML = '';
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                error.email = false;
                break;
        }
    }
    

    let passwordValidations = () => {
        switch (true) {
            case !inputPasswordActual.value:
                errorPassActual.innerHTML = "La contraseña actual es requerida";
                inputPasswordActual.classList.add('is-invalid');
                error.passwordActual = true;
                break;
            case !inputPass1.value:
                errorPass1.innerHTML = "Ingrese su nueva contraseña";
                inputPass1.classList.add('is-invalid');
                error.pass1 = true;
                break;
            case !regExPass.test(inputPass1.value):
                errorPass1.innerHTML = 'La contraseña debe tener: al menos 6 caracteres, una mayúscula, una minúscula y un número';
                inputPass1.classList.add('is-invalid');
                error.pass1 = true;
                break;
            default:
                errorPass1.innerHTML = "";
                inputPass1.classList.remove('is-invalid');
                inputPass1.classList.add('is-valid');
                error.pass1 = false;
                break;
        }
    }
    let password2Validations = () => {
        switch (true) {
            case !inputPass2.value:
                errorPass2.innerHTML = "La verificación de contraseña es obligatoria";
                inputPass2.classList.add('is-invalid');
                error.pass2 = true;
                break;
            case inputPass2.value !== inputPass1.value:
                errorPass2.innerHTML = "La contraseñas no coinciden";
                inputPass2.classList.add('is-invalid');
                error.pass2 = true;
                break;
            default:
                errorPass2.innerHTML = "";
                inputPass2.classList.remove('is-invalid');
                inputPass2.classList.add('is-valid');
                error.pass2 = false;
                break;
        }
    }
    let inputProfileValidations = () => {
        switch (true) {
            case !inputProfile.value:
                errorProfile.innerHTML = "Este campo es obligatorio"
                inputProfile.classList.add('is-invalid');
                error.inputProfile = true;
                break
            default:
                inputProfile.classList.remove('is-invalid');
                inputProfile.classList.add('is-valid');
                error.inputProfile = false;
                errorProfile.innerHTML = "";
        }
    }
    let inputProfileValidations2 = () => {
        switch (true) {
            case !regExExt.exec(inputProfile.value):
                errorProfile.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                inputProfile.classList.add('is-invalid')
                vistaPrevia.src = ""
                error.inputProfile2 = true;
                break;
            case inputProfile.files[0].size > oneMB * 2:
                errorProfile.innerHTML = "El archivo debe pesar menos de 2Mb"
                inputProfile.classList.add('is-invalid')
                vistaPrevia.src = ""
                error.inputProfile2 = true;
                break
            default:
                inputProfile.classList.remove('is-invalid');
                inputProfile.classList.add('is-valid');
                errorProfile.innerHTML = "";
                error.inputProfile2 = false;
                break;
        }
    } 
    inputName.addEventListener('blur', () => {
        nameValidations();
    })

    /* Last Name */
    inputlastName.addEventListener('blur', () => {
        lastNameValidations();
    })

    /* Email */
    inputEmail.addEventListener('blur', () => {
        emailValidations();
    })

    /* Password */
    inputPass1.addEventListener('blur', () => {
        passwordValidations();
    })

    /* Password2 */
    inputPass2.addEventListener('blur', () => {
        password2Validations();
    })

    /* Profile */
    inputProfile.addEventListener('blur', function () {
        inputProfileValidations();
    })

    inputProfile.addEventListener('change', (e) => {
        inputProfileValidations2();
    })


    formNombre.addEventListener("submit", (e) => {
        e.preventDefault();
        nameValidations();

        if (!error.name)  {
            form.submit();
        }
    })

   formSurname.addEventListener("submit", (e) => {
        e.preventDefault();
        lastNameValidations();

        if (!error.lastName)  {
            form.submit();
        }
    })

    formEmail.addEventListener("submit", (e) => {
        e.preventDefault();
        emailValidations();

        if (!error.email ) {
            form.submit();
        }
    })
    
    formPassword.addEventListener("submit", (e) => {
        e.preventDefault();
        passwordValidations();
        password1Validations();

        if (!error.inputPasswordActual) {
            form.submit();
        }

        if (!error.pass1  && !error.pass2) {
            form.submit();
        }
    })

}) 

