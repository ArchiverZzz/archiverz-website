const $navLinks = document.querySelectorAll('.nav-link');
const $sections = document.querySelectorAll('.section');

$navLinks.forEach((link, index) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        $sections.forEach((page, i) => {
            if (i === index) {
                setTimeout(() => {
                    page.classList.remove('hidden');
                }, 300);
            } else {
                setTimeout(() => {
                    page.classList.add('hidden');
                }, 300);
            }
        })
    })
})