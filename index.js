const links = document.querySelectorAll('.side-menu a');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});


const header = document.querySelector('.header');
const mainPage = document.querySelector('.main-page');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('fixed');
        mainPage.style.paddingTop = '182px'
    } else {
        header.classList.remove('fixed');
        mainPage.style.paddingTop = '0'
    }
});


const register = document.getElementById('register');
const close = document.getElementById('close');
const modalWindow = document.getElementById('modal-window');
const modalForm = document.getElementById('modal-form');

function openModal() {
    modalWindow.style.display = 'block';
    modalForm.style.display = 'flex';
}

function closeModal() {
    modalWindow.style.display = 'none';
    modalForm.style.display = 'none';
}

register.addEventListener('click', openModal)
close.addEventListener('click', closeModal);
modalForm.addEventListener('click', event => {
    event.stopPropagation();
})
modalWindow.addEventListener('click', closeModal);

