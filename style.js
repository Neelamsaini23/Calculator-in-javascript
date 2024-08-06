
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === '=') {
            try {
                if (display.innerText.trim() !== '') {
                    display.innerText = eval(display.innerText);
                }
            } catch (error) {
                display.innerText = 'Error';
                console.error(error);
            }
        } else if (value === 'C') {
            display.innerText = '';
        } else {
            display.innerText += value;
        }
    });
});
