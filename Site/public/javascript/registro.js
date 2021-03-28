
const qs = (e) => document.querySelector(e)
window.addEventListener('load', () => {

    let form = qs('#form-signup');
    console.log(form)
    let inputName = form.elements[0];
    let inputlastName = form.elements[1];
    let inputEmail = form.elements[2];
    let inputPassword = form.elements[3];
    let inputPassword2 = form.elements[4];
    let inputProfile = form.elements[5];

    (inputProfile.value)?inputProfile.value = "": null

    /* Expresiones regulares */
    let regLetras = /^[a-zA-Z\sñáéíóúü]*$/;
    let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let oneMB = 1048576;


    /* REGISTER VALIDATIONS */

    /* Name */
    inputName.addEventListener('blur', () => {
        switch (true) {
            case !inputName.value:
                errorName.innerHTML = 'Debes ingresar un nombre';
                inputName.classList.add('is-invalid');
                break;
            case inputName.value.length <= 2:
                errorName.innerHTML = 'El campo nombre debe tener al menos dos letras';
                inputName.classList.add('is-invalid');
                break;
            case !regLetras.test(inputName.value):
                errorName.innerHTML = 'Debes ingresar solo letras';
                inputName.classList.add('is-invalid');
                break;
            default:
                errorName.innerHTML = '';
                inputName.classList.remove('is-invalid');
                inputName.classList.add('is-valid');
                break;
        }
    })

    /* Last Name */
    inputlastName.addEventListener('blur', () => {
        switch (true) {
            case !inputlastName.value:
                errorlastName.innerHTML = 'Debes ingresar un apellido';
                inputlastName.classList.add('is-invalid');
                break;
            case inputlastName.value.length <= 2:
                errorlastName.innerHTML = 'El campo apellido debe tener al menos dos letras';
                inputlastName.classList.add('is-invalid');
                break;
            case !regLetras.test(inputlastName.value):
                errorlastName.innerHTML = 'Debes ingresar solo letras';
                inputlastName.classList.add('is-invalid');
                break;
            default:
                errorlastName.innerHTML = '';
                inputlastName.classList.remove('is-invalid');
                inputlastName.classList.add('is-valid');
                break;
        }
    })

    /* Email */
    inputEmail.addEventListener('blur', () => {
        switch (true) {
            case !inputEmail.value:
                errorEmail.innerHTML = 'El campo email es obligatorio';
                inputEmail.classList.add('is-invalid');
                break;
            case !regExEmail.test(inputEmail.value):
                errorEmail.innerHTML = 'Debes ingresar un email válido';
                inputEmail.classList.add('is-invalid');
                break;
            default:
                errorEmail.innerHTML = '';
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                break;
        }
    })

    /* Password */
    inputPassword.addEventListener('blur', () => {
        switch (true) {
            case !inputPassword.value:
                errorPassword.innerHTML = "El campo contraseña es obligatorio";
                inputPassword.classList.add('is-invalid');
                break;
            case !regExPass.test(inputPassword.value):
                errorPassword.innerHTML = 'La contraseña debe tener: al menos 6 caracteres, una mayúscula, una minúscula y un número';
                inputPassword.classList.add('is-invalid');
                break;
            default:
                errorPassword.innerHTML = "";
                inputPassword.classList.remove('is-invalid');
                inputPassword.classList.add('is-valid');
                break;
        }
    })

    /* Password */
    inputPassword2.addEventListener('blur', () => {
        switch (true) {
            case !inputPassword2.value:
                errorPassword2.innerHTML = "La verificación de contraseña es obligatoria";
                inputPassword2.classList.add('is-invalid');
                break;
            case inputPassword2.value !== inputPassword.value:
                errorPassword2.innerHTML = "La contraseñas no coinciden";
                inputPassword2.classList.add('is-invalid');
                break;
            default:
                errorPassword2.innerHTML = "";
                inputPassword2.classList.remove('is-invalid');
                inputPassword2.classList.add('is-valid');
                break;
        }
    })

    /* PROFILE*/
    inputProfile.addEventListener('blur', function () {
        switch (true) {
            case !inputProfile.value:
                errorProfile.innerHTML = "Este campo es obligatorio"
                inputProfile.classList.add('is-invalid')
                break
            default:
                inputProfile.classList.remove('is-invalid');
                inputProfile.classList.add('is-valid');
                errorProfile.innerHTML = "";
        }
    })
    inputProfile.addEventListener('change', (e) => {
        switch (true) {
            case !regExExt.exec(inputProfile.value):
                errorProfile.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                inputProfile.classList.add('is-invalid')
                vistaPrevia.src = ""
                break;
            case inputProfile.files[0].size > oneMB * 2:
                errorProfile.innerHTML = "El archivo debe pesar menos de 2Mb"
                inputProfile.classList.add('is-invalid')
                vistaPrevia.src = ""
                break
            default:
                inputProfile.classList.remove('is-invalid');
                inputProfile.classList.add('is-valid');
                errorProfile.innerHTML = "";
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0])
                reader.onload = () => {
                    vistaPrevia.src = reader.result
                }
                break;
        }
    })

    
})

window.addEventListener('load', () => {

    let form = qs('#form-login');
    let inputEmail = form.elements[0];
    let inputPassword = form.elements[1];

    let errorEmailLogin = qs('#errorEmailLogin')
    let errorPasswordLogin = qs('#errorPasswordLogin')
    console.log(errorPasswordLogin)
    /* Expresiones regulares */
    let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
    /* REGISTER VALIDATIONS */
    
    /* Email */
    inputEmail.addEventListener('blur', () => {
        switch (true) {
            case !inputEmail.value:
                errorEmailLogin.innerHTML = 'El campo email es obligatorio';
                inputEmail.classList.add('is-invalid');
                break;
            case !regExEmail.test(inputEmail.value):
                errorEmailLogin.innerHTML = 'Debes ingresar un email válido';
                inputEmail.classList.add('is-invalid');
                break;
            default:
                errorEmailLogin.innerHTML = '';
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                break;
        }
    })

    /* Password */
    inputPassword.addEventListener('blur', () => {
        switch (true) {
            case !inputPassword.value:
                errorPasswordLogin.innerHTML = "El campo contraseña es obligatorio";
                inputPassword.classList.add('is-invalid');
                break;
            case !regExPass.test(inputPassword.value):
                errorPasswordLogin.innerHTML = 'La contraseña debe tener: al menos 6 caracteres, una mayúscula, una minúscula y un número';
                inputPassword.classList.add('is-invalid');
                break;
            default:
                errorPasswordLogin.innerHTML = "";
                inputPassword.classList.remove('is-invalid');
                inputPassword.classList.add('is-valid');
                break;
        }
    })

    
})