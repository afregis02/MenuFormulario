// Función para mostrar u ocultar el formulario basado en el ícono
document.getElementById('toggle-icon').addEventListener('click', function() {
    const formulario = document.getElementById('formulario');
    const iconPath = this.querySelector('svg path');

    if (formulario.classList.contains('hidden')) {
        formulario.classList.remove('hidden');
        iconPath.setAttribute('d', 'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'); // Cambia el ícono cuando el formulario está visible
    } else {
        formulario.classList.add('hidden');
        iconPath.setAttribute('d', 'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'); // Cambia el ícono cuando el formulario está oculto
    }
});
