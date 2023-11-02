function toggleMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("visible")) {
        mobileMenu.classList.remove("visible");
    } else {
        mobileMenu.classList.add("visible");
    }
}

// Espera a que el contenido se cargue completamente
window.addEventListener('load', function() {
    // Oculta gradualmente la capa de superposición
    const overlay = document.querySelector('.overlay');
    overlay.style.opacity = 0;
    setTimeout(function() {
        // Elimina la capa de superposición
        overlay.style.display = 'none';
    }, 500); // Ajusta la duración de la transición aquí
});

// Formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Por favor, complete todos los campos.');
        } else {
            alert('Formulario enviado con éxito.');
            form.reset();
        }
    });
});

