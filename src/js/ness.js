/*///////////////////////////////////////
                  NESS
///////////////////////////////////////*/

let status = false

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        if (!window.matchMedia('(max-width: 768px)').matches) {
            init()
            status = true
        }
    }
})

window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 768px)').matches) {
        if (!status) {
            init()
            status = true
        }
    } else {
        if (document.getElementsByClassName('vanta-canvas')[0]) {
            document.getElementsByClassName('vanta-canvas')[0].remove()
        }
        status = false
    }
})

function init () {
    VANTA.WAVES({
        el: ".ness-header",
        mouseControls: false,
        touchControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x232323,
        shininess: 0.00,
        waveHeight: 6.00,
        waveSpeed: 0.85,
        zoom: 0.98
    })
}

new fullpage('.ness-main', {
    navigation: true,
    responsiveWidth: 980,
    parallax: true
})