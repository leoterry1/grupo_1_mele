
 /* REGISTER VALIDATIONS */
const qs = (e) => document.querySelector(e);

window.addEventListener('load', () => {
    let form = qs('#form-signup');
    let inputName = form.elements[0];
    let inputlastName = form.elements[1];
    let inputEmail = form.elements[2];
    let inputPassword = form.elements[3];
    let inputPassword2 = form.elements[4];
    let inputProfile = form.elements[5];
    let registerError = {};

    (inputProfile.value)?inputProfile.value = "": null

    /* Expresiones regulares */
    let regLetras = /^[a-zA-Z\sñáéíóúü]*$/;
    let regExEmail = /^(([^<>()\[\]\,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let oneMB = 1048576;

    /* Name */
    let nameValidations = () =>{
        switch (true) {
            case !inputName.value:
                errorName.innerHTML = 'Debes ingresar un nombre';
                inputName.classList.add('is-invalid');
                registerError.name = true;
                break;
            case inputName.value.length <= 2:
                errorName.innerHTML = 'El campo nombre debe tener al menos dos letras';
                inputName.classList.add('is-invalid');
                registerError.name = true;
                break;
            case !regLetras.test(inputName.value):
                errorName.innerHTML = 'Debes ingresar solo letras';
                inputName.classList.add('is-invalid');
                registerError.name = true;
                break;
            default:
                errorName.innerHTML = '';
                inputName.classList.remove('is-invalid');
                inputName.classList.add('is-valid');
                registerError.name = false;
                break;
        }
    }
    let lastNameValidations = ()=>{
        switch (true) {
            case !inputlastName.value:
                errorlastName.innerHTML = 'Debes ingresar un apellido';
                inputlastName.classList.add('is-invalid');
                registerError.lastName = true;
                break;
            case inputlastName.value.length <= 2:
                errorlastName.innerHTML = 'El campo apellido debe tener al menos dos letras';
                inputlastName.classList.add('is-invalid');
                registerError.lastName = true;
                break;
            case !regLetras.test(inputlastName.value):
                errorlastName.innerHTML = 'Debes ingresar solo letras';
                inputlastName.classList.add('is-invalid');
                registerError.lastName = true;
                break;
            default:
                errorlastName.innerHTML = '';
                inputlastName.classList.remove('is-invalid');
                inputlastName.classList.add('is-valid');
                registerError.lastName = false;
                break;
        }
    }
    let emailValidations = () =>{
        switch (true) {
            case !inputEmail.value:
                errorEmail.innerHTML = 'El campo email es obligatorio';
                inputEmail.classList.add('is-invalid');
                registerError.email = true;
                break;
            case !regExEmail.test(inputEmail.value):
                errorEmail.innerHTML = 'Debes ingresar un email válido';
                inputEmail.classList.add('is-invalid');
                registerError.email = true;
                break;
            default:
                errorEmail.innerHTML = '';
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                registerError.email = false;
                break;
        }
    }
    let passwordValidations = ()=>{
        switch (true) {
            case !inputPassword.value:
                errorPassword.innerHTML = "El campo contraseña es obligatorio";
                inputPassword.classList.add('is-invalid');
                registerError.password = true;
                break;
            case !regExPass.test(inputPassword.value):
                errorPassword.innerHTML = 'La contraseña debe tener: al menos 6 caracteres, una mayúscula, una minúscula y un número';
                inputPassword.classList.add('is-invalid');
                registerError.password = true;
                break;
            default:
                errorPassword.innerHTML = "";
                inputPassword.classList.remove('is-invalid');
                inputPassword.classList.add('is-valid');
                registerError.password = false;
                break;
        }
    }
    let password2Validations = () =>{
        switch (true) {
            case !inputPassword2.value:
                errorPassword2.innerHTML = "La verificación de contraseña es obligatoria";
                inputPassword2.classList.add('is-invalid');
                registerError.password2 = true;
                break;
            case inputPassword2.value !== inputPassword.value:
                errorPassword2.innerHTML = "La contraseñas no coinciden";
                inputPassword2.classList.add('is-invalid');
                registerError.password2 = true;
                break;
            default:
                errorPassword2.innerHTML = "";
                inputPassword2.classList.remove('is-invalid');
                inputPassword2.classList.add('is-valid');
                registerError.password2 = false;
                break;
        }
    }
    let inputProfileValidations = ()=>{
        switch (true) {
            case !inputProfile.value:
                errorProfile.innerHTML = "Este campo es obligatorio"
                inputProfile.classList.add('is-invalid');
                registerError.inputProfile = true;
                break
            default:
                inputProfile.classList.remove('is-invalid');
                inputProfile.classList.add('is-valid');
                registerError.inputProfile = false;
                errorProfile.innerHTML = "";
        }
    }
    let inputProfileValidations2 = () =>{
        switch (true) {
            case !regExExt.exec(inputProfile.value):
                errorProfile.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                inputProfile.classList.add('is-invalid')
                vistaPrevia.src = ""
                registerError.inputProfile2 = true;
                break;
            case inputProfile.files[0].size > oneMB * 2:
                errorProfile.innerHTML = "El archivo debe pesar menos de 2Mb"
                inputProfile.classList.add('is-invalid')
                vistaPrevia.src = ""
                registerError.inputProfile2 = true;
                break
            default:
                inputProfile.classList.remove('is-invalid');
                inputProfile.classList.add('is-valid');
                errorProfile.innerHTML = "";
                registerError.inputProfile2 = false;
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
    inputPassword.addEventListener('blur', () => {
        passwordValidations();
    })

    /* Password2 */
    inputPassword2.addEventListener('blur', () => {
        password2Validations();
    })

    /* Profile */
    inputProfile.addEventListener('blur', function () {
        inputProfileValidations();
    })

    inputProfile.addEventListener('change', (e) => {
        inputProfileValidations2();
    })
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        nameValidations();
        lastNameValidations();
        emailValidations();
        passwordValidations();
        password2Validations();
        inputProfileValidations();
        inputProfileValidations2();

        if (!registerError.name && !registerError.lastName && !registerError.email && !registerError.password && !registerError.password2 && !registerError.inputProfile && !registerError.inputProfile2){
            form.submit();
        }
    })
})

/* LOGIN VALIDATIONS */

window.addEventListener('load', () => {

    let form = qs('#form-login');
    let inputEmail = form.elements[0];
    let inputPassword = form.elements[1];
    let loginError = {};

    let errorEmailLogin = qs('#errorEmailLogin')
    let errorPasswordLogin = qs('#errorPasswordLogin')
    console.log(errorPasswordLogin)

        
    /* Email */
    let inputEmailValidations = () =>{
        switch (true) {
            case !inputEmail.value:
                errorEmailLogin.innerHTML = 'El campo email es obligatorio';
                inputEmail.classList.add('is-invalid');
                loginError.email = true;
                break;
            default:
                errorEmailLogin.innerHTML = '';
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                loginError.email = false;
                break;
        }
    }
    inputEmail.addEventListener('blur', () => {
        inputEmailValidations();
    })

    /* Password */
    let inputPasswordValidations = () =>{
        switch (true) {
            case !inputPassword.value:
                errorPasswordLogin.innerHTML = "Debes ingresar una contraseña";
                inputPassword.classList.add('is-invalid');
                loginError.password = true;
                break;
            default:
                errorPasswordLogin.innerHTML = "";
                inputPassword.classList.remove('is-invalid');
                inputPassword.classList.add('is-valid');
                loginError.password = false;
                break;
        }
    }
    inputPassword.addEventListener('blur', () => {
        inputPasswordValidations();
    })

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        inputEmailValidations();
        inputPasswordValidations();

        if (!loginError.email && !loginError.password){
            form.submit();
        }
    })

   
})