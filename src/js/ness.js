/*///////////////////////////////////////
                  NESS
///////////////////////////////////////*/



document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        waves()
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