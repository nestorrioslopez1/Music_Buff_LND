// Esperamos a que el contenido cargue
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-toggle');
    const cajaImagen = document.getElementById('contenedor-img-ocultar');

    boton.addEventListener('click', () => {
        if (cajaImagen.style.display === 'none') {
            cajaImagen.style.display = 'block';
            boton.textContent = 'Ocultar Imagen';
        } else {
            cajaImagen.style.display = 'none';
            boton.textContent = 'Mostrar Imagen';
        }
    });
});