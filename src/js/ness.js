/*///////////////////////////////////////
                  NESS
///////////////////////////////////////*/

let status = false

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        if (!window.matchMedia('(max-width: 768px)').matches) {
            waves()
            status = true
        }
    }
})

window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 768px)').matches) {
        if (!status) {
            waves()
            status = true
        }
    } else {
        document.getElementsByClassName('vanta-canvas')[0].remove()
        status = false
    }
})

function waves () {
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