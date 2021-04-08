const qs = (e) => document.querySelector(e);
window.addEventListener('load', () => {
    let form = qs('#search-desktop');
    let buscador = form[0];
    let searchError = {};
    let buscadorValidations=()=>{
        if (buscador.value == ""){
        searchError.buscador = true;
        }else{
            searchError.buscador = false;
        }
    }
    buscador.addEventListener('blur', () => {
        buscadorValidations();
    })
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        buscadorValidations();
        if (!searchError.buscador){
            form.submit();
        }
    })

    let form2 = qs('#search-mobile');
    let buscador2 = form2[0];
    let buscador2Validations=()=>{
        if (buscador2.value == ""){
        searchError.buscador = true;
        }else{
            searchError.buscador = false;
        }
    }
    buscador.addEventListener('blur', () => {
        buscador2Validations();
    })
    form2.addEventListener("submit", (e)=>{
        e.preventDefault();
        buscador2Validations();
        if (!searchError.buscador){
            form.submit();
        }
    })
})