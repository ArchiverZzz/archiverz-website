const $navLinks = document.querySelectorAll('.nav-link');
const $sections = document.querySelectorAll('.section');

$sections[0].style.display = 'block';
$sections[0].style.opacity = 1;

$navLinks.forEach((link, index) => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const current = [...$sections].find(s => s.style.display === 'block');
        const next = $sections[index];

        document.title = 'ArchiverZ | ' + link.textContent;
        if (document.title.includes('ArchiverZ | ArchiverZ')) {
            document.title = 'ArchiverZ | Home';
        }

        if (current === next) return;

        const fadeOut = current.animate(
            [
                { opacity: 1, transform: 'translateY(0)' },
                { opacity: 0, transform: 'translateY(20px)' }
            ],
            {
                duration: 400,
                easing: 'ease-in',
                fill: 'forwards'
            }
        );

        fadeOut.onfinish = () => {
            current.style.display = 'none';
            current.style.opacity = 0;

            next.style.display = 'block';
            const fadeIn = next.animate(
                [
                    { opacity: 0, transform: 'translateY(20px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ],
                {
                    duration: 400,
                    easing: 'ease-out',
                    fill: 'forwards'
                }
            );

            fadeIn.onfinish = () => {
                next.style.opacity = 1;
            };
        };
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.body) {
        document.body.animate(
            [ { opacity: 0 }, { opacity: 1 } ],
            {
                duration: 1800,
                easing: 'ease',
                fill: 'forwards'
            }
        );
    }
});