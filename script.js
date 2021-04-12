const hanburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.right')


navLinks.hidden = true

function toggleClass () {
    event.stopPropagation()
    navLinks.hidden = !navLinks.hidden
}

hanburger.addEventListener('click', toggleClass)