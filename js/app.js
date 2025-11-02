const $navLinks = document.querySelectorAll('.nav-link');
const $sections = document.querySelectorAll('.section');

$navLinks.forEach((link, index) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        $sections.forEach((page, i) => {
            if (i === index) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        })
    })
})