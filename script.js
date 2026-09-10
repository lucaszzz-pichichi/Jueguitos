document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start');
    const screenWelcome = document.getElementById('screen-welcome');
    const screenAdventure = document.getElementById('screen-adventure');

    if (btnStart) {
        btnStart.onclick = function() {
            // Forzar ocultar bienvenida
            screenWelcome.setAttribute('style', 'display: none !important;');
            
            // Forzar mostrar juego
            screenAdventure.setAttribute('style', 'display: block !important;');
        };
    }
});