document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

let backgroundPosition = 0;

function animateBackground() {
    backgroundPosition += 0.5;
    document.querySelector('.container').style.backgroundPosition = `${backgroundPosition}px 0`;
    requestAnimationFrame(animateBackground);
}

animateBackground();
