const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('change', (event) => {
        if (event.target.value) {
            event.target.classList.add('campo-preenchido');
        } else {
            event.target.classList.remove('campo-preenchido');
        }
    })
})