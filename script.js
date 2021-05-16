/*===== MENU SHOW =====*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

/*===== ANIMATION IMG =====*/
document.addEventListener('mousemove', move);

function move(e){
    this.querySelectorAll('.move').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed) / 120;
        const y = (window.innerHeight - e.pageY*speed) / 120;

        Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
gsap.from('.nav__logo, .nav__toggle', {opacity:0, duraction:1, delay:2, y:10})
gsap.from('.nav__item', {opacity:0, duraction:1, delay:2.1, y:30, stagger:0.2})

gsap.from('.hero__title', {opacity:0, duraction:1, delay:1.6, y:30})
gsap.from('.hero__desc', {opacity:0, duraction:1, delay:1.8, y:30})
gsap.from('.hero__btn', {opacity:0, duraction:1, delay:2.1, y:30})
gsap.from('.hero__img', {opacity:0, duraction:1, delay:1.3, y:30})