
 /* Valida que el texto contenga solo letras minúsculas y espacios */

function validarMinusculas(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

/*
Encripta el texto ingresado en el textarea de entrada.
El if Verifica si el texto contiene solo letras minúsculas y espacios.
 */

function encriptar() {
    const texto = document.getElementById('texto').value;
    if (!validarMinusculas(texto)) {
        alert('El texto contiene mayúsculas o caracteres acentuados.');
        return;
    }
/*Reemplaza las vocales por sus equivalentes encriptados.*/

    const encriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
        
    mostrarResultado(encriptado);
}


 /* Desencripta el texto */
 
function desencriptar() {
    const texto = document.getElementById('texto').value;
    
/* Reemplaza las cadenas encriptadas por sus vocales originales. */

    const desencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
        
    mostrarResultado(desencriptado);
}


 /* Muestra el resultado en la interfaz de usuario.*/
 
function mostrarResultado(resultado) {
    const parrafoResultado = document.getElementById('resultado');
    const textareaResultado = document.getElementById('resultado-textarea');
    
    const imagen = document.getElementById('imagen');
    const botonCopiar = document.getElementById('boton-copiar');
    const mensaje = document.getElementById('mensaje');

    parrafoResultado.textContent = resultado;
    textareaResultado.value = resultado;

/* Oculta la imagen y muestra el resultado en un párrafo. */

    parrafoResultado.style.display = 'block';
    textareaResultado.style.display = 'none';
    imagen.style.display = 'none';
    botonCopiar.style.display = 'block';
    mensaje.style.display = 'none';
}

/* Copiar el texto del resultado al portapapeles. */
function copiarTexto() {
    const textareaResultado = document.getElementById('resultado-textarea');
    textareaResultado.style.display = 'block';
    textareaResultado.select();
    document.execCommand('copy');
    textareaResultado.style.display = 'none';
    alert('Texto copiado al portapapeles');
}
