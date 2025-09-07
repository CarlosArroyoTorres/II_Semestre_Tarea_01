//Variables
let email = document.getElementById('email');
let asunto = document.getElementById('asunto');
let mensaje = document.getElementById('mensaje');
let btnEnviar = document.getElementById('enviar');
let formularioEnviar = document.getElementById('enviar-mail');
let resetBtn = document.getElementById('resetBtn');
//event Listener
eventListeners();
function eventListeners(){
    //Inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);
    //Campos del Formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    //Boton de Enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);
    //Boton de Reset
    resetBtn.addEventListener('click', resetFormulario);
}
//funciones
function inicioApp(){
    //deshabilitar el envio
    btnEnviar.disabled = true;
}
    //Validar que el campo tenga algo escrito
function validarCampo(){
    //se valida la longitud del texto y que no este vacio
    validarLongitud(this);
    //Validar unicamemnte el email
    if(this.type === 'email'){
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}
//Resetear el formulario
function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}
//cuando se envia el correo
function enviarEmail(e){
    //Spinner al presionar Enviar
    let spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    //Gif que envia el email
    let enviado = document.createElement('img');
    enviado.src = 'img/mail.gif'
    enviado.style.display = 'block'
    //Ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);
    e.preventDefault();
}
//Verificar la longitud del texto en los campos
function validarLongitud(campo){
    if (campo.value.length > 0){
        campo.style.borderBottomColor = 'darkblue';
        campo.classList.remove('error');
    } else{
        campo.style.borderBottomColor = 'gold';
        campo.classList.add('error')
    }

}
function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'darkblue';
        campo.classList.remove('error');
    } else{
        campo.style.borderBottomColor = 'gold';
        campo.classList.add('error')
    }
}