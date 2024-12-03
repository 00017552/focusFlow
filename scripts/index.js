const onButton = document.getElementById('on');
const offButton = document.getElementById('off');
const nav = document.querySelector('ul');
function check() {
    if (document.body.clientWidth >= 1020) {
        onButton.style.display = 'none';
        offButton.style.display = 'none';
        nav.style.display = 'flex';
    } else {
        onButton.style.display = 'none';
        offButton.style.display = 'block';
        nav.style.display = 'none';
    }
}
function navOn() {
    nav.style.display = 'flex';
    onButton.style.display = 'block';
    offButton.style.display = 'none';
    nav.classList.remove('navOff');
    nav.classList.add('navOn');
}
function navOff() {
    nav.classList.add('navOff');
    nav.classList.remove('navOn');
    onButton.style.display = 'none';
    offButton.style.display = 'block';
    setTimeout(() => {
        nav.style.display = 'none';
    }, 500);
}
window.addEventListener('resize', check);
