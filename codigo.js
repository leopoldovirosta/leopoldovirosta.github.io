function iniciar(){
    edad1=document.getElementById("edad");
    nombrem1=document.getElementById("nombrem");
    dnim1=document.getElementById("dnim");
    edad1.addEventListener("input", validacion, false);
    nombrem1.addEventListener("input", validacion, false);
    dnim1.addEventListener("input", validacion, false);
}
function validacion(){
    if(edad1.value<18){
        if(nombrem1.value==''){
            nombrem1.setCustomValidity('inserte un nombre');
            nombrem1.style.background='#FFDDDD';
        }else{
            nombrem1.setCustomValidity('');
            nombrem1.style.background='#FFFFFF';
        }
        if(dnim1.value==''){
            dnim1.setCustomValidity('inserte un dni');
            dnim1.style.background='#FFDDDD';
        }else{
            dnim1.setCustomValidity('');
            dnim1.style.background='#FFFFFF';
        }
    }
}


window.addEventListener('load', iniciar, false);