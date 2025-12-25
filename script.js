// Script simple para hacer el menú responsive (desplegable en móvil)
const nav = document.querySelector('nav ul');
const toggle = document.createElement('button');
toggle.textContent = 'Menú';
toggle.style.display = 'none';
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
document.querySelector('header').appendChild(toggle);

// Media query para mostrar botón en móvil
if (window.innerWidth < 768) {
    toggle.style.display = 'block';
    nav.style.display = 'none';
    nav.classList.add('active');
}
