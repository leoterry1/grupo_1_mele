
window.addEventListener('load', () => {
    let form = qs('#form-carga');
    let inputName = form.elements[0];
    let inputMarca = form.elements[1];
    let inputPrice = form.elements[2];
    let inputCategory = form.elements[3];
    let inputSubCategory = form.elements[4];
    let inputDetails = form.elements[5];
    let inputImage = form.elements[6];
    let chargeError = {};


    /* Expresiones regulares */
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let oneMB = 1048576;

    /* Name */
    let nameValidations = () => {
        switch (true) {
            case !inputName.value:
                errorName.innerHTML = 'Debes ingresar un nombre';
                inputName.classList.add('is-invalid');
                chargeError.name = true;
                break;
            case inputName.value.length <= 2:
                errorName.innerHTML = 'El campo nombre debe tener al menos dos letras';
                inputName.classList.add('is-invalid');
                chargeError.name = true;
                break;
            default:
                errorName.innerHTML = '';
                inputName.classList.remove('is-invalid');
                inputName.classList.add('is-valid');
                chargeError.name = false;
                break;
        }
    }
    let marcaValidations = () => {
        switch (true) {
            case !inputMarca.value:
                errorMarca.innerHTML = 'Debes ingresar una marca o artista';
                inputMarca.classList.add('is-invalid');
                chargeError.marca = true;
                break;
            case inputMarca.value.length <= 2:
                errorMarca.innerHTML = 'Este campo debe tener al menos dos letras';
                inputMarca.classList.add('is-invalid');
                chargeError.marca = true;
                break;
            default:
                errorMarca.innerHTML = '';
                inputMarca.classList.remove('is-invalid');
                inputMarca.classList.add('is-valid');
                chargeError.marca = false;
                break;
        }
    }
    let priceValidations = () => {
        switch (true) {
            case inputPrice.value == 0:
                errorPrice.innerHTML = 'El campo precio es obligatorio';
                inputPrice.classList.add('is-invalid');
                chargeError.price = true;
                break;
            case parseInt(inputPrice.value) == NaN:
                errorPrice.innerHTML = 'Debes ingresar un precio válido';
                inputPrice.classList.add('is-invalid');
                chargeError.price = true;
                break;
            default:
                errorPrice.innerHTML = '';
                inputPrice.classList.remove('is-invalid');
                inputPrice.classList.add('is-valid');
                chargeError.price = false;
                break;
        }
    }
    let categoryValidations = () => {
        switch (true) {
            case inputCategory.value == "null":
                errorCategory.innerHTML = "Debe seleccionar una categoría";
                inputCategory.classList.add('is-invalid');
                chargeError.category = true;
                break;
            default:
                errorCategory.innerHTML = "";
                inputCategory.classList.remove('is-invalid');
                inputCategory.classList.add('is-valid');
                chargeError.category = false;
                break;
        }
    }
    let subCategoryValidations = () => {
        switch (true) {
            case inputSubCategory.value == "null":
                errorSubCategory.innerHTML = "Debe seleccionar una sub-categoría";
                inputSubCategory.classList.add('is-invalid');
                chargeError.subCategory = true;
                break;
            default:
                errorSubCategory.innerHTML = "";
                inputSubCategory.classList.remove('is-invalid');
                inputSubCategory.classList.add('is-valid');
                chargeError.subCategory = false;
                break;
        }
    }
    let inputDetailsValidations = () => {
        switch (true) {
            case inputDetails.value.length == 0 || inputDetails.value.length < 20 || inputDetails.value.length > 500:
                errorDetails.innerHTML = 'El campo detalles debe tener entre 20 y 500 caracteres';
                inputDetails.classList.add('is-invalid');
                chargeError.details = true;
                break;
            default:
                errorDetails.innerHTML = '';
                inputDetails.classList.remove('is-invalid');
                inputDetails.classList.add('is-valid');
                chargeError.details = false;
                break;
        }
    }
    let inputImageValidations = () => {
        switch (true) {
            case !inputImage.value:
                errorImage.innerHTML = "Debe seleccionar un archivo"
                inputImage.classList.add('is-invalid')
                chargeError.inputImage = true;
                break;
            case !regExExt.exec(inputImage.value):
                errorImage.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                inputImage.classList.add('is-invalid')
                chargeError.inputImage = true;
                break;
            case inputImage.files[0].size > oneMB * 2:
                errorImage.innerHTML = "El archivo debe pesar menos de 2Mb"
                inputImage.classList.add('is-invalid')
                chargeError.inputImage = true;
                break
            default:
                inputImage.classList.remove('is-invalid');
                inputImage.classList.add('is-valid');
                errorImage.innerHTML = "";
                chargeError.inputImage = false;
                break;
        }
    }
    inputName.addEventListener('blur', () => {
        nameValidations();
    })

    /* Marca */
    inputMarca.addEventListener('blur', () => {
        marcaValidations();
    })

    /* price */
    inputPrice.addEventListener('blur', () => {
        priceValidations();
    })

    /* category */
    inputCategory.addEventListener('blur', () => {
        categoryValidations();
    })

    /* subCategory */
    inputSubCategory.addEventListener('blur', () => {
        subCategoryValidations();
    })

    /* Profile */
    inputDetails.addEventListener('blur', function () {
        inputDetailsValidations();
    })

    inputImage.addEventListener('change', (e) => {
        inputImageValidations();
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        nameValidations();
        marcaValidations();
        priceValidations();
        categoryValidations();
        subCategoryValidations();
        inputDetailsValidations();
        inputImageValidations();

        if (!chargeError.name && !chargeError.marca && !chargeError.price && !chargeError.category && !chargeError.subCategory && !chargeError.details && !chargeError.inputImage) {
            form.submit();
        }
    })
})
