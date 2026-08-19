const colorBox = document.getElementById('colorBox');
const colorInput = document.getElementById('colorInput');
const resetBtn = document.getElementById('resetBtn');

const defaultColor = '#cccccc';

colorInput.addEventListener('input', (event) => {
    colorBox.style.backgroundColor = event.target.value;
});

resetBtn.addEventListener('click', () => {
    colorBox.style.backgroundColor = defaultColor;
    colorInput.value = defaultColor;
});