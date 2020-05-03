/*///////////////////////////////////////
                  NESS
///////////////////////////////////////*/

let navbar = document.getElementsByClassName('ness-navbar')[0],
    menu   = navbar.getElementsByClassName('ness-navbar-menu')[0],
    button = menu.getElementsByClassName('ness-navbar-button')[0]

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 199) {
        navbar.classList.add('ness-navbar-scrolled')
    } else {
        navbar.classList.remove('ness-navbar-scrolled')
    }
})

button.addEventListener('click', () => {
    if (menu.classList.contains('ness-navbar-opened')) {
        menu.classList.remove('ness-navbar-opened')
    } else {
        menu.classList.add('ness-navbar-opened')
    }
})