const mode = document.querySelector('body');
const toggleBtn =document.querySelector('.toggle-btn');
console.log(mode);



toggleBtn.addEventListener('click', () => {
    if (mode.hasAttribute('mode')) {
        mode.removeAttribute('mode');
    } else {
        mode.setAttribute('mode', 'dark');
    }

    if (toggleBtn.hasAttribute('mode')) {
        toggleBtn.removeAttribute('mode');
    } else {
        toggleBtn.setAttribute('mode', 'dark');
    }
})