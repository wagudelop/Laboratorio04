function mostrarMensaje(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    const titulo = seccion.querySelector('h2').textContent;
    alert('Estás en: ' + titulo);
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe realmente
    alert('Su mensaje ha sido enviado');
});