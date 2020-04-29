/*///////////////////////////////////////
                  NESS
///////////////////////////////////////*/

let   navbar = document.getElementsByClassName('ness-navbar')[0]

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 199) {
        navbar.classList.add('ness-navbar-scrolled')
    } else {
        navbar.classList.remove('ness-navbar-scrolled')
    }
})