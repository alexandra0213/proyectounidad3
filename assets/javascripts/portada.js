document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        'section1': 'section2',
        'section2': 'section3',
        'section3': 'bad-ending' // ID ajustado para la sección de "bad ending"
    };

    const buttons = document.querySelectorAll('.botones button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentSection = document.querySelector('.fondo-transparente:not([style*="display: none"])');
            const currentSectionId = currentSection ? currentSection.id : '';
            const nextSectionId = sections[currentSectionId];

            if (currentSectionId === 'bad-ending') {
                // Redirige a 'inicio.html' si se hace clic en cualquier botón en "bad-ending"
                window.location.href = 'inicio.html';
            } else {
                if (this.classList.contains('si')) {
                    window.location.href = 'inicio.html';
                } else if (this.classList.contains('no')) {
                    if (nextSectionId === 'bad-ending') {
                        window.location.href = 'bad-ending.html';
                    } else if (nextSectionId) {
                        currentSection.style.display = 'none';
                        document.getElementById(nextSectionId).style.display = 'flex';
                    }
                }
            }
        });
    });
});


